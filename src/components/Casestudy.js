import React from "react";
import Prismic from "prismic-javascript";
import Nav from "./Nav";
import Casestudy_Slice from "./Casestudy_Slice";
import { navigate } from "@reach/router";

class Casestudy extends React.Component {
  state = {
    doc: null,
    casestudyContent: [],
    isMobile: false,
    colorMode: null,
    nextCasestudyId: null,
    nextCasestudySlug: null
  };
  getPrismicData = () => {
    const { apiEndpoint } = this.props;
    Prismic.api(apiEndpoint, {
      accessToken: process.env.REACT_APP_ACCESS_TOKEN
    }).then(api => {
      api
        .query(Prismic.Predicates.at("document.id", `${this.props.id}`))
        .then(response => {
          if (response) {
            this.setState({
              doc: response.results
            });
            // console.log(this.state.doc);
            this.cleanData();
          }
        })
        .catch(error => console.log(error));
    });
  };
  //run through all the casestudy data, assign the casestudy content as props
  cleanData = () => {
    let casestudyContent = [];
    if (this.state.doc) {
      this.state.doc[0].data.body.forEach(casestudySlice => {
        casestudyContent.push(casestudySlice);
      });
      this.state.doc[0].data.casestudy_title[0].text;
    }
    this.setState({
      casestudyContent,
      casestudyTitle: this.state.doc[0].data.casestudy_title[0].text,
      casestudyHero: this.state.doc[0].data.casestudy_hero_image.url,
      casestudyHeroMobile: this.state.doc[0].data.casestudy_hero_image_mobile
        .url
    });
    if (this.state.doc[0].data.light_dark_mode.toLowerCase() == "dark") {
      this.setState({
        colorMode: this.state.doc[0].data.light_dark_mode,
        navClass: "--dark-mode"
      });
    } else {
      this.setState({
        colorMode: "light",
        navClass: "--light-mode"
      });
    }
  };
  renderCasestudyData = () => {
    // console.log(this.state.casestudyContent);
    if (this.state.casestudyContent) {
      let i = 0;
      return (
        <div>
          {this.state.casestudyContent.map(casestudySlice => {
            i++;
            return (
              <Casestudy_Slice
                slice_doc={casestudySlice}
                key={`${[i]}-${casestudySlice.slice_type}`}
                slice_type={casestudySlice.slice_type}
                isMobile={this.state.isMobile}
                colorMode={this.state.colorMode}
              />
            );
          })}
        </div>
      );
    }
  };
  //pass down to the casestudy and slices to toggle mobile/desktop assets
  checkForMobile = () => {
    if (window.innerWidth < 768) {
      this.setState({
        isMobile: true
      });
    }
  };
  //check props for 'next' casestudy, pass down id and slug
  handleNextButton = () => {
    const { order } = this.props;
    let nextIndex = 0;
    //find out where we are in the order...
    if (this.props.order.length > 0) {
      let currentIndex = order.indexOf(
        order.find(current => {
          return current.slug == this.props.slug;
        })
      );
      /*
      if were at the last casestudy, route to beginning 
      otherwise, set next route 
      */
      if (currentIndex == 0) {
        nextIndex = order[this.props.order.length - 1];
      } else {
        nextIndex = order[currentIndex - 1];
      }
      if (nextIndex && this.state.nextCasestudyId === null) {
        this.setState({
          nextCasestudyId: nextIndex.id,
          nextCasestudySlug: nextIndex.slug
        });
      }
    }
  };
  /*
  added this reload since the router wasn't reloading the page
  even though the url was updating...
  */
  navigateNext = () => {
    navigate(
      `casestudy/${this.state.nextCasestudySlug}/${this.state.nextCasestudyId}`
    ).then(location.reload());
  };
  //LIFECYCLE------------------------------------------------
  componentDidMount() {
    this.getPrismicData();
    this.checkForMobile();
    window.addEventListener("popstate", () => {
      location.reload();
    });
  }
  componentDidUpdate() {
    this.handleNextButton();
  }
  componentWillUnmount() {
    window.removeEventListener("popstate", () => {
      location.reload();
    });
  }
  //RENDER-------------------------------------------------
  render() {
    // console.log(this.props);
    return (
      <div
        className={`casestudy ${
          this.state.colorMode && this.state.colorMode.toLowerCase() === "dark"
            ? "casestudy--dark"
            : "casestudy--light"
        }`}
      >
        <Nav
          class={this.state.navClass}
          page={`casestudy ${
            this.state.colorMode &&
            this.state.colorMode.toLowerCase() === "dark"
              ? "casestudy--dark"
              : "casestudy--light"
          }`}
        />
        <h2>{this.state.casestudyTitle}</h2>
        <img
          src={
            this.state.casestudyHeroMobile && window.innerWidth < 768
              ? this.state.casestudyHeroMobile
              : this.state.casestudyHero
          }
        />
        {this.renderCasestudyData()}

        <h2 onClick={this.navigateNext}>Next</h2>
      </div>
    );
  }
}

export default Casestudy;

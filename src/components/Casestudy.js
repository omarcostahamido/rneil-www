import React from "react";
import Prismic from "prismic-javascript";
import Nav from "./Nav";
import Casestudy_Slice from "./Casestudy_Slice";
import { Link } from "@reach/router";
import Header_Slice from "./Slices/Header_Slice";

class Casestudy extends React.Component {
  state = {
    doc: null,
    casestudyContent: [],
    isMobile: false,
    colorMode: null,
    nextCasestudyId: null,
    nextCasestudySlug: null,
    isNext: false,
    currentPath: null
  };
  //FUNCS---------------------------------------------
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
              doc: response.results,
              isNext: false,
              nextCasestudyId: null,
              nextCasestudySlug: null
            });
            // console.log(this.state.doc);
            this.cleanData();
            this.scrollTop();
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
      casestudyTitleCopy:
        this.state.doc[0].data.casestudy_supporting_title_copy[0] &&
        this.state.doc[0].data.casestudy_supporting_title_copy[0].text,
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
      // if (nextIndex && this.state.nextCasestudyId === null)
      if (nextIndex && !this.state.isNext) {
        this.setState({
          nextCasestudyId: nextIndex.id,
          nextCasestudySlug: nextIndex.slug,
          isNext: true,
          currentPath: this.props.location.pathname
        });
      }
    }
  };
  scrollTop = () => {
    if (window.pageYOffset > 0) {
      window.scrollTo(0, 0);
    }
  };
  //LIFECYCLE------------------------------------------------
  componentDidMount() {
    this.getPrismicData();
    this.checkForMobile();
    //HACK to fix weird scroll bug between Router Links
    this.scrollTop();
  }
  componentDidUpdate() {
    if (
      this.state.nextCasestudySlug &&
      !(this.state.currentPath == this.props.location.pathname)
    ) {
      this.getPrismicData();
    }
    this.handleNextButton();
  }

  //RENDER-------------------------------------------------
  render() {
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
        <Header_Slice
          titleCopy={this.state.casestudyTitleCopy}
          casestudyHero={
            this.state.casestudyHeroMobile && window.innerWidth < 768
              ? this.state.casestudyHeroMobile
              : this.state.casestudyHero
          }
          colorMode={this.state.colorMode}
        />

        {this.renderCasestudyData()}
        <div className="next-btn">
          <Link
            to={`/${this.state.nextCasestudySlug}/${
              this.state.nextCasestudyId
            }`}
          >
            next exhibition
          </Link>
          <svg width="24px" height="13px" viewBox="0 0 24 13">
            <g
              transform="translate(-320.000000, -8032.000000)"
              stroke={
                this.state.colorMode &&
                this.state.colorMode.toLowerCase() === "dark"
                  ? "#FFF"
                  : "#000"
              }
            >
              <g transform="translate(182.000000, 8025.000000)">
                <g transform="translate(150.000000, 13.500000) rotate(-90.000000) translate(-150.000000, -13.500000) translate(143.500000, 0.500000)">
                  <path
                    d="M12.5,17 L6.5,25 L0.5,17 M6.5,25 L6.5,1 L6.5,25"
                    id="Arrow"
                    fill="transparent"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
}

export default Casestudy;

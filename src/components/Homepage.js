import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Prismic from "prismic-javascript";
import Loader from "./Loader";

class Homepage extends React.Component {
  state = {
    doc: null,
    headerMainCopy: null,
    headerImageSlider: [],
    isLoading: false
  };
  //FUNCS--------------------------------------------------
  getPrismicData = () => {
    this.setState({
      isLoading: true
    });
    const { apiEndpoint } = this.props;
    Prismic.api(apiEndpoint, {
      accessToken: process.env.REACT_APP_ACCESS_TOKEN
    }).then(api => {
      api
        .query(Prismic.Predicates.at("document.type", "home_page_header"), {
          fetch: [
            "home_page_header.home_page_header_title_copy",
            "home_page_header.home_page_header_slider_images"
          ]
        })
        .then(response => {
          if (response) {
            this.setState({
              doc: response.results,
              isLoading: false,
              hasLoaded: true
            });
            // console.log(this.state.doc);
            this.handleCleanData();
          }
        })
        .catch(error => console.log(error));
    });
  };
  handleCleanData = () => {
    if (this.state.doc) {
      this.state.doc.map(homepageItem => {
        if (homepageItem.type === "home_page_header") {
          let images = [];
          homepageItem.data.home_page_header_slider_images.map(image => {
            images.push(image.home_page_header_slider_image.url);
          });
          this.setState({
            headerImageSlider: images,
            headerMainCopy:
              homepageItem.data.home_page_header_title_copy[0].text
          });
        }
      });
    }
  };
  handleAnchorLink = () => {
    document.removeEventListener("scroll", this.handleParallax);
    document
      .querySelector("div.homepage__casestudies-featured")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };
  handleParallax = () => {
    document.querySelector("div.header").style.top = `${(
      window.pageYOffset * 0.4
    ).toString()}px`;
  };
  //LIFECYCLE----------------------------------
  componentDidMount() {
    this.getPrismicData();
    if (window.innerWidth >= 1024) {
      document.addEventListener("scroll", this.handleParallax);
    }
  }
  componentWillUnmount() {
    if (window.innerWidth >= 1024) {
      document.removeEventListener("scroll", this.handleParallax);
    }
  }
  // RENDER ---------------------------------------------
  render() {
    return (
      <div>
        <div className="homepage__body">
          <Nav page="homepage" class="--home" />
          <Header
            copy={this.state.headerMainCopy}
            galleryImages={this.state.headerImageSlider}
            handleAnchorLink={this.handleAnchorLink}
          />
          <div className="homepage__casestudies-featured">
            {this.props.renderCasestudies()}
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;

/**
 * 
 * 
 *  <div>
        {this.state.isLoading ? (
          <Loader isLoading={this.state.isLoading} />
        ) : (
          <div className="homepage__body">
            <Nav page="homepage" class="--home" />
            <Header
              copy={this.state.headerMainCopy}
              galleryImages={this.state.headerImageSlider}
              handleAnchorLink={this.handleAnchorLink}
            />
            <div className="homepage__casestudies-featured">
              {this.props.renderCasestudies()}
            </div>
          </div>
        )}
      </div>
 */

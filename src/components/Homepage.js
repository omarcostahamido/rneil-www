import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Loader from "./Loader";

class Homepage extends React.Component {
  handleAnchorLink = () => {
    // document.removeEventListener("scroll", this.handleParallax);
    document
      .querySelector("div.homepage__casestudies-featured")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // RENDER ---------------------------------------------
  render() {
    return (
      <div>
        {this.props.isLoading ? (
          <Loader isLoading={this.props.isLoading} class="--dark-mode" />
        ) : (
          <div
            className={`homepage__body ${
              this.props.isLoading ? "--isLoading" : "--isLoaded"
            }`}
          >
            <Nav page="homepage" class="--home" />
            <section className="parallax--wrap">
              <Header
                isLoading={this.props.isLoading}
                copy={
                  this.props.data
                    ? this.props.data[0].data.home_page_header_title_copy[0]
                        .text
                    : null
                }
                imageUrl={
                  this.props.data
                    ? this.props.data[0].data.header_image_desktop.url
                    : null
                }
                imageUrlMobile={
                  this.props.data[0].data.header_image_mobile.url
                    ? this.props.data[0].data.header_image_mobile.url
                    : this.props.data[0].data.header_image_desktop.url
                }
                autoplayUrl={
                  this.props.data[0].data.header_autoplay_vid.url
                    ? this.props.data[0].data.header_autoplay_vid.url
                    : null
                }
                autoplayUrlMobile={
                  this.props.data[0].data.header_autoplay_vid_mobile.url
                    ? this.props.data[0].data.header_autoplay_vid_mobile.url
                    : null
                }
                handleAnchorLink={this.handleAnchorLink}
              />

              <div className="homepage__casestudies-featured ">
                {this.props.renderCasestudies()}
              </div>
            </section>
          </div>
        )}
      </div>
    );
  }
}

export default Homepage;

import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Loader from "./Loader";

const Homepage = props => {
  const handleAnchorLink = () => {
    document
      .querySelector("div.homepage__casestudies-featured")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div>
      {props.isLoading ? (
        <Loader isLoading={props.isLoading} class="--dark-mode" />
      ) : (
        <div
          className={`homepage__body ${
            props.isLoading ? "--isLoading" : "--isLoaded"
          }`}
        >
          <Nav page="homepage" class="--home" />
          <section className="parallax--wrap">
            <Header
              isLoading={props.isLoading}
              copy={
                props.data
                  ? props.data[0].data.home_page_header_title_copy[0].text
                  : null
              }
              mediaType={props.data ? props.data[0].data.image_or_video : null}
              imageUrl={
                props.data ? props.data[0].data.header_image_desktop.url : null
              }
              imageUrlMobile={
                props.data[0].data.header_image_mobile.url
                  ? props.data[0].data.header_image_mobile.url
                  : props.data[0].data.header_image_desktop.url
              }
              autoplayUrl={
                props.data[0].data.header_autoplay_vid.url
                  ? props.data[0].data.header_autoplay_vid.url
                  : null
              }
              autoplayUrlMobile={
                props.data[0].data.header_autoplay_vid_mobile.url
                  ? props.data[0].data.header_autoplay_vid_mobile.url
                  : null
              }
              handleAnchorLink={handleAnchorLink}
              handleFadeIn={props.handleFadeIn}
              handleFadeOut={props.handleFadeOut}
            />

            <div className="homepage__casestudies-featured ">
              {props.renderCasestudies()}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Homepage;

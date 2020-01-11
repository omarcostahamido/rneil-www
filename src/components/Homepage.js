import React, { useEffect } from "react";
import Nav from "./Nav";
import Header from "./Header";
import Loader from "./Loader";

const Homepage = props => {
  function handleAnchorLink() {
    document
      .querySelector(".homepage__casestudies-featured")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
  useEffect(() => {
    props.scrollTop();
  }, []);
  return (
    <main>
      {props.isLoading ? (
        <Loader isLoading={props.isLoading} class="--dark-mode" />
      ) : (
        <div
          className={`homepage__body ${
            props.isLoading ? "--isLoading" : "--isLoaded"
          }`}
        >
          <Nav page="homepage" class="--home" />
          <div className="parallax--wrap">
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
            <section className="homepage__casestudies-featured ">
              {props.renderCasestudies()}
            </section>
          </div>
        </div>
      )}
    </main>
  );
};

export default Homepage;

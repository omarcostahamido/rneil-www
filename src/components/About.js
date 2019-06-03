import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Pull_Quote_Slice from "./Slices/Pull_Quote_Slice";
import Image_Dyptich from "./Slices/Image_Dyptich";
import Body_Text_Slice from "./Slices/Body_Text_Slice";
import Video_Module_Slice from "./Slices/Video_Module_Slice";

const About = props => {
  function renderVideos(props) {
    if (props.data[0].data.about_page_videos.length >= 1) {
      return (
        <div>
          {props.data[0].data.about_page_videos.map(video => {
            return (
              <div key={`${props.data[0].id}-${video.video_title[0].text}`}>
                <Video_Module_Slice
                  id={`${props.data[0].id}-${video.video_title[0].text}`}
                  mediaModuleUrl={video.about_page_video_url.url}
                  handleFadeIn={props.handleFadeIn}
                  handleFadeOut={props.handleFadeOut}
                  style="media--wide media--about"
                />
                <div className="about-videos__info">
                  <p>{video.video_title[0].text}</p>
                  <p>{video.video_year[0].text}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }
  function fadeIn() {
    window.setTimeout(() => {
      document.querySelector(".about__header").classList.remove("animate");
      document.querySelector(".dyptich--wrapper").classList.remove("animate");
      document.querySelector(".about__header").classList.add("is--active");
      document.querySelector(".dyptich--wrapper").classList.add("is--active");
    }, 200);
  }
  const [isMobile, setIsMobile] = useState(null);
  function checkForMobile() {
    window.innerWidth < 1024 || document.documentElement.clientWidth < 1024
      ? setIsMobile(true)
      : setIsMobile(false);
  }
  //HOOKS----------------------------------------------
  let [isScroll, setScroll] = useState(true);
  useEffect(() => {
    document.querySelector("body").classList.add("body--is-white");
    if (isScroll) {
      setScroll((isScroll = false));
      props.scrollTop();
    }
    fadeIn();
    return () => {
      document.querySelector("body").classList.remove("body--is-white");
    };
  }, []);
  useEffect(() => {
    checkForMobile();
    window.addEventListener("resize", checkForMobile);
    return function() {
      window.removeEventListener("resize", checkForMobile);
    };
  }, []);
  //RENDER----------------------------------------------
  return (
    <main
      onScroll={() => {
        setScroll((isScroll = false));
      }}
      className="--isLoaded about"
    >
      <Nav className="--light-mode" color="#000" page="about" />
      <section className="about__header animate">
        <Pull_Quote_Slice
          id="about-pull-quote"
          pullQuoteCopy={
            props.data ? props.data[0].data.about_page_main_copy[0].text : null
          }
          handleFadeIn={props.handleFadeIn}
          handleFadeOut={props.handleFadeOut}
        />
        {props.data ? (
          <a href="mailto:hello@r-neil.com" id="about__email-link">
            email for inquiries
          </a>
        ) : null}
      </section>
      <section className="dyptich--wrapper animate">
        {props.data && (
          <Image_Dyptich
            id={props.data && `${props.data[0].id}-about-dyptich`}
            isMobile={isMobile}
            mobileUrls={
              props.data && props.data[0].data.image_left_mobile.url
                ? [
                    props.data[0].data.image_left_mobile.url,
                    props.data[0].data.image_right_mobile.url
                  ]
                : null
            }
            desktopUrls={
              props.data
                ? [
                    props.data[0].data.about_page_image.url,
                    props.data[0].data.about_page_image_2.url
                  ]
                : null
            }
            handleFadeIn={props.handleFadeIn}
            handleFadeOut={props.handleFadeOut}
          />
        )}
        <Body_Text_Slice
          id="about__body-slice"
          position="two-column"
          bodyCopy={
            props.data ? props.data[0].data.about_page_copy[0].text : null
          }
          handleFadeIn={props.handleFadeIn}
          handleFadeOut={props.handleFadeOut}
        />
        {props.data && renderVideos(props)}
      </section>
    </main>
  );
};

export default About;

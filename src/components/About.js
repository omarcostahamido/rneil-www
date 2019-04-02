import React from "react";
import Nav from "./Nav";
import Video_Module_Slice from "./Slices/Video_Module_Slice";
import Image_Dyptich from "./Slices/Image_Dyptich";
import { Waypoint } from "react-waypoint";

const About = props => {
  const renderVideos = props => {
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
  };
  // props.scrollTop();
  /**
   * use a hook here to store the state of whether the 'in' for the transition
   * should be true based on whether or not that element is in view
   * or i could toggle my own classes with a func and bind it to the bigger 'about' onScroll div event
   */
  const fadeIn = () => {
    document.querySelector(".about__header").classList.remove("animate");
    document.querySelector(".about__header").classList.add("is--active");
  };
  const fadeOut = () => {
    document.querySelector(".about__header").classList.remove("is--active");
    document.querySelector(".about__header").classList.add("animate");
  };
  const handleFadeIn = elementId => {
    const el = document.getElementById(elementId);
    console.log(el);
    return () => {
      el.classList.remove("animate");
      el.classList.add("is--active");
    };
  };
  const handleFadeOut = elementId => {
    const el = document.getElementById(elementId);
    return () => {
      el.classList.add("animate");
      el.classList.remove("is--active");
    };
  };
  return (
    <div onChange={props.scrollTop} className="--isLoaded about">
      {!props.data && props.scrollTop()}
      <Nav className="--light-mode" color="#000" page="about" />
      <Waypoint
        onEnter={fadeIn}
        onLeave={fadeOut}
        topOffset="15%"
        bottomOffset="15%"
      >
        <div className={`about__header animate`}>
          <h1 className="about__title">
            {props.data
              ? props.data[0].data.about_page_main_copy[0].text
              : null}
          </h1>

          <div className="about__copy">
            {props.data ? (
              <a href="mailto:hello@r-neil.com">email for inquiries</a>
            ) : null}

            <p>
              {props.data ? props.data[0].data.about_page_copy[0].text : null}
            </p>
          </div>
        </div>
      </Waypoint>
      <div className="dyptich--wrapper">
        <Image_Dyptich
          id={props.data && `${props.data[0].id}-about-dyptich`}
          dyptichUrls={
            props.data
              ? [
                  props.data[0].data.about_page_image.url,
                  props.data[0].data.about_page_image_2.url
                ]
              : null
          }
          handleFadeIn={handleFadeIn}
          handleFadeOut={handleFadeOut}
        />

        {props.data && renderVideos(props)}
      </div>
    </div>
  );
};

export default About;

//className={`about__header ${props.data ? "is--active" : "animate"}`}

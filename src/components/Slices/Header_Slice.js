import React from "react";
import Autoplay_Video_Module from "./Autoplay_Video_Module";
import Down_Arrow from "../Down_Arrow";
import { Waypoint } from "react-waypoint";

const Header_Slice = props => {
  // const handleFadeIn = () => {
  //   document.querySelector(".header--info").classList.remove("animate");
  //   document.querySelector(".header--info").classList.add("is--active");
  // };
  // const handleFadeOut = () => {
  //   document.querySelector(".header--info").classList.remove("is--active");
  //   document.querySelector(".header--info").classList.add("animate");
  // };
  //for slice fade-ins
  const handleFadeIn = elementId => {
    const el = document.getElementById(elementId);
    return () => {
      console.log("fading in");
      el.classList.remove("animate");
      el.classList.add("is--active");
    };
  };
  const handleFadeOut = elementId => {
    const el = document.getElementById(elementId);
    return () => {
      console.log("fading out");
      el.classList.add("animate");
      el.classList.remove("is--active");
    };
  };

  return (
    <div>
      <div
        className="casestudy__header --isLoaded"
        style={
          !props.isVideo
            ? {
                backgroundColor: "inherit",
                backgroundImage: `url(${props.casestudyHero})`,
                WebkitBackgroundSize: "cover",
                MozBackgroundSize: "cover",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }
            : { backgroundColor: "transparent" }
        }
      >
        {props.isVideo ? (
          <Autoplay_Video_Module
            autoplayVideoUrl={props.casestudyHeroVideo}
            style="autoplay-hero"
            handleFadeIn={handleFadeIn}
            handleFadeOut={handleFadeOut}
          />
        ) : null}

        <div
          className="header--info"
          style={props.isVideo ? { position: "absolute", zIndex: "2" } : null}
        >
          <h1 className={props.titleCopyColor ? props.titleCopyColor : null}>
            {props.titleCopy}
          </h1>
          <Down_Arrow
            class="down-arrow"
            titleCopyColor={props.titleCopyColor}
          />
        </div>
      </div>
    </div>
  );
};

export default Header_Slice;
/**
 * 
 * <Waypoint
          onEnter={handleFadeIn}
          onLeave={handleFadeOut}
          topOffset="40%"
          bottomOffset="15%"
        >
 * 
 * 
 *  const handleBackgroundFade = () => {
    console.log("fading");
    document.querySelector(".casestudy__header").classList.add("is--active");
    document.querySelector(".casestudy__header").classList.remove("animate");
  };
  const setTimeoutFade = () => {
    window.setTimeout(handleBackgroundFade, 1000);
  };
  setTimeoutFade();
 * 
 * 
 * hack to get some fade-in animations but not a smart route
 * also breaks on ios
 * 
 * {props.isVideo ? (
        <video
          autoplay={true}
          muted
          playsinline
          onCanPlay={handleBackgroundFade}
          src={props.casestudyHeroVideo}
          style={{
            opacity: "0",
            position: "absolute",
            pointerEvents: "none",
            visibility: "hidden",
            width: "100%",
            height: "100%"
          }}
        />
      ) : (
        <img
          onLoad={handleBackgroundFade}
          src={props.casestudyHero}
          style={{
            opacity: "0",
            position: "absolute",
            pointerEvents: "none",
            visibility: "hidden",
            width: "100%",
            height: "100%"
          }}
        />
      )}
 */

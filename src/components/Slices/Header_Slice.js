import React from "react";
import Autoplay_Video_Module from "./Autoplay_Video_Module";
import Down_Arrow from "../Down_Arrow";
import { Waypoint } from "react-waypoint";

const Header_Slice = props => {
  const handleFadeIn = () => {
    document.querySelector(".header--info").classList.remove("animate");
    document.querySelector(".header--info").classList.add("is--active");
  };
  const handleFadeOut = () => {
    document.querySelector(".header--info").classList.remove("is--active");
    document.querySelector(".header--info").classList.add("animate");
  };
  const handleBackgroundFade = () => {
    document.querySelector(".casestudy__header").classList.add("is--active");
    document.querySelector(".casestudy__header").classList.remove("animate");
  };
  return (
    <div>
      {props.isVideo ? (
        <video
          onCanPlay={handleBackgroundFade}
          src={props.casestudyHeroVideo}
          style={{ opacity: "0", position: "absolute", pointerEvents: "none" }}
        />
      ) : (
        <img
          onLoad={handleBackgroundFade}
          src={props.casestudyHero}
          style={{ opacity: "0", position: "absolute", pointerEvents: "none" }}
        />
      )}
      <div
        className="casestudy__header animate"
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
          />
        ) : null}
        <Waypoint
          onEnter={handleFadeIn}
          onLeave={handleFadeOut}
          topOffset="40%"
          bottomOffset="15%"
        >
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
        </Waypoint>
      </div>
    </div>
  );
};

export default Header_Slice;

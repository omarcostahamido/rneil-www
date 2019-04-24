import React, { useEffect, useState } from "react";
import Autoplay_Video_Module from "./Autoplay_Video_Module";
import Down_Arrow from "../Down_Arrow";
import { Waypoint } from "react-waypoint";

const Header_Slice = props => {
  const fadeIn = () => {
    document.querySelector(".header-slice__info").classList.add("is--active");
    document.querySelector(".header-slice__info").classList.remove("animate");
    setInfoVisible(true);
  };
  const fadeOut = () => {
    document
      .querySelector(".header-slice__info")
      .classList.remove("is--active");
    document.querySelector(".header-slice__info").classList.add("animate");
  };
  const fadeInBg = () => {
    updateIsFading(() => {
      isFading = true;
    });
    document.querySelector(".casestudy__header").classList.add("is--active");
    document.querySelector(".casestudy__header").classList.remove("animate");
    updateIsFading(() => {
      isFading = false;
    });
  };
  const fadeOutBg = () => {
    updateIsFading(() => {
      isFading = true;
    });
    document.querySelector(".casestudy__header").classList.remove("is--active");
    document.querySelector(".casestudy__header").classList.add("animate");
    updateIsFading(() => {
      isFading = false;
    });
  };
  const handleAnchorScroll = () => {
    document
      .querySelector(".casestudy__location-info")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };
  let [currentPath, updatePath] = useState(window.location.href);
  let [isFading, updateIsFading] = useState(false);
  //to accommodate for in btw casestudy routing
  useEffect(() => {
    if (currentPath != window.location.href) {
      updatePath(() => {
        currentPath = window.location.href;
      });
      if (!isFading) {
        fadeOutBg();
      }
    }
  });
  let [infoIsVisible, setInfoVisible] = useState(false);
  useEffect(() => {
    if (!infoIsVisible) {
      fadeIn();
    }
  }, []);
  return (
    <header
      className="--isLoaded"
      onClick={window.innerWidth > 1024 ? handleAnchorScroll : undefined}
    >
      <img
        src={props.casestudyHero}
        onLoad={fadeInBg}
        style={{ display: "none" }}
      />
      <figure
        className="casestudy__header animate"
        style={
          !props.isVideo
            ? {
                height: window.innerWidth <= 1024 && window.innerHeight,
                backgroundColor: "inherit",
                backgroundImage: `url(${props.casestudyHero})`,
                WebkitBackgroundSize: "cover",
                MozBackgroundSize: "cover",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }
            : {
                backgroundColor: "transparent",
                height: window.innerWidth <= 1024 && window.innerHeight
              }
        }
      >
        {props.isVideo ? (
          <Autoplay_Video_Module
            type="header"
            autoplayVideoUrl={props.casestudyHeroVideo}
            style="autoplay-hero"
            handleFadeIn={props.handleFadeIn}
            handleFadeOut={props.handleFadeOut}
          />
        ) : null}
        <article
          className="header-slice__info"
          style={props.isVideo ? { position: "absolute", zIndex: "2" } : null}
        >
          <Waypoint
            onEnter={fadeIn}
            onLeave={fadeOut}
            topOffset={window.innerWidth < 768 ? "40%" : "60%"}
          />
          <h1
            id={`${props.id}--titleCopy`}
            className={props.titleCopyColor ? props.titleCopyColor : null}
          >
            {props.titleCopy}
          </h1>

          <Down_Arrow
            class="down-arrow"
            titleCopyColor={props.titleCopyColor}
          />
        </article>
      </figure>
    </header>
  );
};

export default Header_Slice;

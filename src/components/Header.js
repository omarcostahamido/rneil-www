import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Down_Arrow from "./Down_Arrow";
import Autoplay_Video_Module from "./Slices/Autoplay_Video_Module";

const Header = props => {
  function fadeIn() {
    window.setTimeout(() => {
      document.querySelector(".header__info").classList.remove("animate");
      document.querySelector(".header__img").classList.remove("animate");
      document.querySelector(".header__info").classList.add("is--active");
      document.querySelector(".header__img").classList.add("is--active");
    }, 150);
  }
  let [headerHeight, setHeaderHeight] = useState(null);
  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setHeaderHeight(window.innerHeight);
    } else {
      setHeaderHeight(null);
    }
  });
  return (
    <header
      id="home-header"
      className="header --isLoaded --parallax"
      style={{ height: headerHeight }}
      onClick={window.innerWidth > 1024 ? props.handleAnchorLink : undefined}
    >
      <figure
        className={`header__img ${
          props.mediaType === "is--image" ? "animate" : "is--active"
        }`}
      >
        {props.mediaType === "is--video" && props.autoplayUrl ? (
          <Autoplay_Video_Module
            id={
              window.innerWidth < 1024 && props.autoplayUrlMobile
                ? `${props.autoplayUrlMobile}--home-vid`
                : `${props.autoplayUrl}--home-vid`
            }
            type="homepage-header"
            style="homepage-header__vid"
            autoplayVideoUrl={
              window.innerWidth < 1024 && props.autoplayUrlMobile
                ? props.autoplayUrlMobile
                : props.autoplayUrl
            }
            handleFadeIn={props.handleFadeIn}
            handleFadeOut={props.handleFadeOut}
          />
        ) : (
          <img
            onLoad={fadeIn}
            src={
              window.innerWidth < 1024 && props.imageUrlMobile
                ? props.imageUrlMobile
                : props.imageUrl
            }
          />
        )}
      </figure>
      <article className="header__info animate">
        <span className="header-copy--wrap">
          <h1 className="header__main-copy">{props.copy}</h1>
        </span>
        <span className="exhibitions--wrap">
          <p id="exhibitions">exhibitions</p>
          <Down_Arrow
            class={!props.isLoading ? "down-arrow" : null}
            titleCopyColor="black"
          />
        </span>
      </article>
    </header>
  );
};
Header.propTypes = {
  isLoading: PropTypes.bool,
  mediaType: PropTypes.string,
  imageUrlMobile: PropTypes.string,
  imageUrl: PropTypes.string,
  autoplayUrlMobile: PropTypes.string,
  autoplayUrl: PropTypes.string,
  copy: PropTypes.string,
  handleAnchorLink: PropTypes.func,
  handleFadeIn: PropTypes.func,
  handleFadeOut: PropTypes.func
};
export default Header;

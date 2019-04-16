import React from "react";
import PropTypes from "prop-types";
import Down_Arrow from "./Down_Arrow";
import Autoplay_Video_Module from "./Slices/Autoplay_Video_Module";

const Header = props => {
  const fadeIn = () => {
    window.setTimeout(() => {
      document.querySelector(".header__img").classList.remove("animate");
      document.querySelector(".header__img").classList.add("is--active");
    }, 200);
  };
  return (
    <div
      id="home-header"
      className="header --isLoaded --parallax"
      style={window.innerWidth < 1024 ? { height: window.innerHeight } : null}
      onClick={window.innerWidth > 1024 && props.handleAnchorLink}
    >
      <div
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
      </div>
      <div className="header__info">
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
      </div>
    </div>
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

import React from "react";
import Down_Arrow from "./Down_Arrow";

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
      className={`header --isLoaded ${window.innerWidth > 1024 && "parallax"}`}
      style={window.innerWidth < 1024 ? { height: window.innerHeight } : null}
      onClick={props.handleAnchorLink}
    >
      <div className="header__img animate">
        <img
          onLoad={fadeIn}
          src={window.innerWidth < 1024 ? props.imageUrl : props.imageUrlMobile}
        />
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

export default Header;

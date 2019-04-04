import React from "react";
import Down_Arrow from "./Down_Arrow";

const Header = props => {
  return (
    <div
      id="home-header"
      className="header --isLoaded"
      style={window.innerWidth < 1024 ? { height: window.innerHeight } : null}
    >
      <div className="header__img">
        <img
          src={window.innerWidth < 1024 ? props.imageUrl : props.imageUrlMobile}
        />
      </div>
      <div className="header__info">
        <span className="header-copy--wrap">
          <h1 className="header__main-copy">{props.copy}</h1>
        </span>
        <span className="exhibitions--wrap" onClick={props.handleAnchorLink}>
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

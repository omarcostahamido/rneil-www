import React from "react";
import { Link } from "@reach/router";

class Nav extends React.Component {
  //FUNCS-----------------------------------------
  handleNavScroll = isMounting => {
    let previous = window.pageYOffset * 0.4;
    let hasScrolled = false;
    const nav = document.querySelector(".nav--sticky-wrap");
    const scrollAnimate = () => {
      //handle dynamic scrolling behavior
      if (window.pageYOffset <= 0) {
        nav.classList.remove("is--scroll-down");
      } else if (window.pageYOffset * 0.4 > previous) {
        nav.classList.add("is--scroll-down");
        nav.classList.add("is--scroll");
      } else {
        nav.classList.remove("is--scroll-down");
        if (this.props.page == "homepage" && !hasScrolled) {
          //fade in nav items
          document.querySelector(".nav__nav-items").classList.add("is--active");
          document.querySelector(".nav__nav-items").classList.remove("animate");
          hasScrolled = true;
        }
      }
      previous = window.pageYOffset * 0.4;
    };
    if (isMounting) {
      document.addEventListener("scroll", scrollAnimate);
    } else {
      document.removeEventListener("scroll", scrollAnimate);
    }
  };
  handleNavColor = () => {
    if (
      this.props.page == "homepage" &&
      window.pageYOffset >= window.innerHeight
    ) {
      document.querySelector(".logo-path").style.fill = "#fff";
      document.querySelector("div.nav__nav-items").style.color = "#fff";
    } else if (
      this.props.page == "homepage" &&
      window.pageYOffset <= window.innerHeight
    ) {
      document.querySelector(".logo-path").style.fill = "#000";
      document.querySelector("div.nav__nav-items").style.color = "#000";
    }
  };
  handleLogo = () => {
    if (window.innerWidth < 768) {
      return (
        <svg viewBox="0 0 81 12">
          <g>
            <path
              className={`logo-path ${this.props.class}`}
              d="M81,12 L79.1484323,12 L72.0599602,3.31709717 L72.0505826,12 L70,12 L70,0 L71.8515677,0 L78.9483755,8.68191882 L78.9483755,0 L81,0 L81,12 Z M40,6.5 C40,7.32783019 39.3290094,8 38.5,8 C37.6721698,8 37,7.32783019 37,6.5 C37,5.67216981 37.6721698,5 38.5,5 C39.3290094,5 40,5.67216981 40,6.5 Z M4.83540373,-3.19744231e-14 C7.53887342,-3.19744231e-14 9,1.23394834 9,3.47158672 C9,5.51143911 7.47140715,6.86543665 5.07924609,6.95104551 L8.9489184,12 L6.5982009,12 L2.85382309,6.95104551 L1.8967659,6.95104551 L1.8967659,12 L7.81597009e-14,12 L7.81597009e-14,-3.19744231e-14 L4.83540373,-3.19744231e-14 Z M1.8967659,1.81746617 L1.8967659,5.19458795 L4.78528593,5.19458795 C6.31291497,5.19458795 7.02612979,4.62779828 7.02612979,3.47158672 C7.02612979,2.33111931 6.27147141,1.81746617 4.78528593,1.81746617 L1.8967659,1.81746617 Z"
            />
          </g>
        </svg>
      );
    } else {
      return (
        <svg viewBox="0 0 232 13">
          <g>
            <path
              className={`logo-path ${this.props.class}`}
              d="M231.0806,12.1951 L222.3606,12.1951 L222.3606,9.99999999e-05 L224.3296,9.99999999e-05 L224.3296,10.3311 L231.0806,10.3311 L231.0806,12.1951 Z M176.833,12.1948 L176.833,-0.0002 L178.802,-0.0002 L178.802,12.1948 L176.833,12.1948 Z M133.606,12.1951 L124.712,12.1951 L124.712,9.99999999e-05 L133.493,9.99999999e-05 L133.493,1.8471 L126.681,1.8471 L126.681,5.1311 L133.257,5.1311 L133.257,6.9771 L126.681,6.9771 L126.681,10.3481 L133.606,10.3481 L133.606,12.1951 Z M81.1528,12.1951 L79.3758,12.1951 L72.5728,3.3711 L72.5638,12.1951 L70.5958,12.1951 L70.5958,9.99999999e-05 L72.3728,9.99999999e-05 L79.1838,8.8231 L79.1838,9.99999999e-05 L81.1528,9.99999999e-05 L81.1528,12.1951 Z M39.9297,6.0896 C39.9297,6.7916 39.3607,7.3616 38.6577,7.3616 C37.9557,7.3616 37.3857,6.7916 37.3857,6.0896 C37.3857,5.3876 37.9557,4.8176 38.6577,4.8176 C39.3607,4.8176 39.9297,5.3876 39.9297,6.0896 Z M5.0173,-6.39489275e-14 C7.8223,-6.39489275e-14 9.3383,1.254 9.3383,3.528 C9.3383,5.601 7.7523,6.977 5.2703,7.064 L9.2853,12.195 L6.8463,12.195 L2.9613,7.064 L1.9683,7.064 L1.9683,12.195 L0.0003,12.195 L0.0003,-6.39489275e-14 L5.0173,-6.39489275e-14 Z M1.9683,1.847 L1.9683,5.279 L4.9653,5.279 C6.5503,5.279 7.2903,4.703 7.2903,3.528 C7.2903,2.369 6.5073,1.847 4.9653,1.847 L1.9683,1.847 Z"
            />
          </g>
        </svg>
      );
    }
  };
  //LIFECYCLE---------------------------------------------------
  componentDidMount() {
    if (this.props.page == "about" || this.props.page == "work") {
      document.querySelector(".nav__nav-items").classList.add("is--active");
      document.querySelector(".nav__nav-items").classList.remove("animate");
    }

    this.handleNavScroll(true);
    if (window.location.pathname == "/") {
      document.addEventListener("scroll", this.handleNavColor);
    }
  }
  componentWillUnmount() {
    this.handleNavScroll(false);
    document.removeEventListener("scroll", this.handleNavColor);
  }
  //RENDER-------------------------------------------------------
  render() {
    return (
      <div
        className={`nav--sticky-wrap ${
          this.props.page && this.props.page == "homepage"
            ? "--dynamic-color"
            : null
        }`}
      >
        <nav className="nav">
          <Link className="nav__logo" to="/">
            {this.handleLogo()}
          </Link>
          <div
            className={`nav__nav-items animate ${this.props.class} ${
              this.props.page
            }`}
          >
            <Link to="/work">work</Link>
            <Link to="/about">about</Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;

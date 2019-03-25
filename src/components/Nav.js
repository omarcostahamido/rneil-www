import React from "react";
import { Link } from "@reach/router";
import Logo from "./Logo";

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
      window.addEventListener("scroll", scrollAnimate);
    } else {
      document.removeEventListener("scroll", scrollAnimate);
    }
  };
  handleNavColor = () => {
    if (
      this.props.page == "homepage" &&
      window.pageYOffset >= window.innerHeight
    ) {
      console.log("white");
      document.querySelector(".logo-path").style.fill = "#fff";
      document.querySelector("div.nav__nav-items").style.color = "#fff";
    } else if (
      this.props.page == "homepage" &&
      window.pageYOffset <= window.innerHeight
    ) {
      console.log("black");
      document.querySelector(".logo-path").style.fill = "#000";
      document.querySelector("div.nav__nav-items").style.color = "#000";
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
  componentDidUpdate() {
    if (/^casestudy/.test(this.props.page)) {
      document.querySelector(".nav__nav-items").classList.add("is--active");
      document.querySelector(".nav__nav-items").classList.remove("animate");
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
            <Logo class={this.props.class} isLoader={false} />
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

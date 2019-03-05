import React from "react";
import { Link } from "@reach/router";

class Nav extends React.Component {
  state = {
    hasScrolled: false,
    scrollDelta: 0
  };

  handleNavAnimation = () => {
    //animate in the right-hand side items
    if (window.pageYOffset > 100 && !this.hasScrolled) {
      document.querySelector(".nav__nav-items").classList.add("is--active");
      document.querySelector(".nav__nav-items").classList.remove("animate");
      this.setState({
        hasScrolled: true
      });
    }
  };

  logScrollDirection = () => {
    let previous = window.pageYOffset * 0.4;
    const nav = document.querySelector(".nav--sticky-wrap");

    window.addEventListener("scroll", function() {
      if (window.pageYOffset <= 0) {
        nav.classList.remove("is--scroll-down");
      } else if (window.pageYOffset * 0.4 > previous) {
        // console.log("down");
        nav.classList.add("is--scroll-down");
        nav.classList.add("is--scroll");
      } else {
        // console.log("up");
        nav.classList.remove("is--scroll-down");
      }
      previous = window.pageYOffset * 0.4;
    });
  };

  componentDidMount() {
    this.logScrollDirection();
    // window.addEventListener("scroll", () => {
    //   window.requestAnimationFrame(this.handleNavAnimation);
    // });
  }

  componentDidUpdate() {
    if (this.state.hasScrolled) {
      window.removeEventListener("scroll", this.handleNavAnimation);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleNavAnimation);
  }

  //use component will unmount to handle the animation and transition between pages??

  render() {
    return (
      <div className="nav--sticky-wrap">
        <nav className="nav">
          <Link className="nav__logo" to="/">
            <img id="logo" alt="logo" src={this.props.logo} />
          </Link>
          <div className="nav__nav-items animate">
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;

/**
 *
 *   handleAnchorLink = () => {
    document
      .getElementById("exhibitions")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

   // renderExhibitionLink = () => {
  //   if (/about$/.test(window.location) || /casestudy/.test(window.location)) {
  //     return <Link to="/exhibitions">Exhibitions</Link>;
  //   } else {
  //     return <a onClick={this.handleAnchorLink}>Exhibitions</a>;
  //   }
  // };
 */

import React from "react";
import { Link } from "@reach/router";

class Nav extends React.Component {
  handleNavItemAnimation = () => {
    //animate in the right-hand side items
    document.querySelector(".nav__nav-items").classList.add("is--active");
    document.querySelector(".nav__nav-items").classList.remove("animate");
  };

  handleNavScroll = (mounting, handleNavItemAnimation) => {
    let previous = window.pageYOffset * 0.4;
    let hasScrolled = false;
    const nav = document.querySelector(".nav--sticky-wrap");

    if (mounting) {
      window.addEventListener("scroll", function() {
        if (window.pageYOffset <= 0) {
          nav.classList.remove("is--scroll-down");
        } else if (window.pageYOffset * 0.4 > previous) {
          nav.classList.add("is--scroll-down");
          nav.classList.add("is--scroll");
          if (!hasScrolled) {
            handleNavItemAnimation();
          }
        } else {
          nav.classList.remove("is--scroll-down");
        }
        previous = window.pageYOffset * 0.4;
      });
    } else if (!mounting) {
      window.removeEventListener("scroll", function() {
        if (window.pageYOffset > 100 && !this.hasScrolled) {
          handleNavItemAnimation();
        }
        if (window.pageYOffset <= 0) {
          nav.classList.remove("is--scroll-down");
        } else if (window.pageYOffset * 0.4 > previous) {
          nav.classList.add("is--scroll-down");
          nav.classList.add("is--scroll");
        } else {
          nav.classList.remove("is--scroll-down");
        }
        previous = window.pageYOffset * 0.4;
      });
    }
  };

  componentDidMount() {
    this.handleNavScroll(true, this.handleNavItemAnimation);
  }

  componentWillUnmount() {
    this.handleNavScroll(false, this.handleNavItemAnimation);
  }

  //use component will unmount to handle the animation and transition between pages??

  render() {
    return (
      <div className="nav--sticky-wrap">
        <nav className="nav">
          <Link className="nav__logo" to="/">
            <svg
              width="232px"
              height="13px"
              viewBox="0 0 232 13"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Icon / Logo / Longhand / Horiz</title>
              <desc>Created with Sketch.</desc>
              <g
                id="Icon-/-Logo-/-Longhand-/-Horiz"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <path
                  className="logo-path"
                  d="M231.0806,12.1951 L222.3606,12.1951 L222.3606,9.99999999e-05 L224.3296,9.99999999e-05 L224.3296,10.3311 L231.0806,10.3311 L231.0806,12.1951 Z M176.833,12.1948 L176.833,-0.0002 L178.802,-0.0002 L178.802,12.1948 L176.833,12.1948 Z M133.606,12.1951 L124.712,12.1951 L124.712,9.99999999e-05 L133.493,9.99999999e-05 L133.493,1.8471 L126.681,1.8471 L126.681,5.1311 L133.257,5.1311 L133.257,6.9771 L126.681,6.9771 L126.681,10.3481 L133.606,10.3481 L133.606,12.1951 Z M81.1528,12.1951 L79.3758,12.1951 L72.5728,3.3711 L72.5638,12.1951 L70.5958,12.1951 L70.5958,9.99999999e-05 L72.3728,9.99999999e-05 L79.1838,8.8231 L79.1838,9.99999999e-05 L81.1528,9.99999999e-05 L81.1528,12.1951 Z M39.9297,6.0896 C39.9297,6.7916 39.3607,7.3616 38.6577,7.3616 C37.9557,7.3616 37.3857,6.7916 37.3857,6.0896 C37.3857,5.3876 37.9557,4.8176 38.6577,4.8176 C39.3607,4.8176 39.9297,5.3876 39.9297,6.0896 Z M5.0173,-6.39489275e-14 C7.8223,-6.39489275e-14 9.3383,1.254 9.3383,3.528 C9.3383,5.601 7.7523,6.977 5.2703,7.064 L9.2853,12.195 L6.8463,12.195 L2.9613,7.064 L1.9683,7.064 L1.9683,12.195 L0.0003,12.195 L0.0003,-6.39489275e-14 L5.0173,-6.39489275e-14 Z M1.9683,1.847 L1.9683,5.279 L4.9653,5.279 C6.5503,5.279 7.2903,4.703 7.2903,3.528 C7.2903,2.369 6.5073,1.847 4.9653,1.847 L1.9683,1.847 Z"
                  id="Logo"
                  fill="#fff"
                />
              </g>
            </svg>
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
 *<img id="logo" alt="logo" src="../assets/Rneil.svg" />
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

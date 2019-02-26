import React from "react";
import { Link } from "@reach/router";

/*

implement sticky nav bx here 
- get correct styling - logo on left, items on right - CHECK
- have it load with items not showing - CHECK
- on scroll...fade in those items - CHECK
- first get the nav to stick to top of page....adjust z-index.... - CHECK
- last....at a certain scroll point, do transform3d(0 100% 0) to hide it
- listen for the scroll up and transform3d again
*/

class Nav extends React.Component {
  state = {
    hasScrolled: false,
    scrollDelta: 0
  };
  handleAnchorLink = () => {
    document
      .getElementById("exhibitions")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  renderExhibitionLink = () => {
    if (/about$/.test(window.location) || /casestudy/.test(window.location)) {
      return <Link to="/exhibitions">Exhibitions</Link>;
    } else {
      return <a onClick={this.handleAnchorLink}>Exhibitions</a>;
    }
  };

  handleNavAnimation = () => {
    const nav = document.querySelector(".nav__sticky-wrap");

    //animate in the right-hand side items
    if (window.pageYOffset > 100 && !this.hasScrolled) {
      document.querySelector(".nav__nav-items").classList.add("is--active");
      document.querySelector(".nav__nav-items").classList.remove("animate");
      this.setState({
        hasScrolled: true
      });
    }

    //check for up-scroll - show nav
    if (window.pageYOffset >= this.state.scrollDelta) {
      this.setState({
        scrollDelta: window.pageYOffset
      });
      nav.classList.add("is--scroll-down");
      nav.classList.add("is--scroll");
    } else {
      nav.classList.remove("is--scroll-down");
      this.setState({
        scrollDelta: window.pageYOffset
      });
    }
    //check for down-scroll again
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleNavAnimation);
  }

  render() {
    return (
      <div className="nav__sticky-wrap">
        <nav className="nav">
          <Link className="nav__logo" to="/">
            <img id="logo" alt="logo" src={this.props.logo} />
          </Link>
          <div className="nav__nav-items animate">
            {this.renderExhibitionLink()}
            <Link to="/about">About</Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;

/*
scroll event version - hacky and hard to get numbers on
not a lot of info given on this scroll event since its on the 
window and not on a targeted element
// handleStickyScroll = e => {
  //   console.log(e.path[0].scrollingElement.offsetTop);
  // };

  // componentDidMount() {
  //   document.addEventListener("scroll", this.handleStickyScroll);
  // }
*/

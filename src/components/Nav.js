import React from "react";
import { Link } from "@reach/router";

//this is where that fancy anchor link needs to go
/* 
issue here with the anchor tag behavior with exhibitions in the nav
exhibitions can route with the anchor tag on the home page
but not on about or case study....unless somehow I can handle that
by checking for that rerouting and then calling that handleScrollDown()
func.....could be possible with the history obj - might not be worth looking into
*/

class Nav extends React.Component {
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

  render() {
    return (
      <div>
        <nav>
          <Link to="/">
            <img id="logo" alt="logo" src={this.props.logo} />
          </Link>
          {this.renderExhibitionLink()}
          <Link to="/about">About</Link>
        </nav>
      </div>
    );
  }
}

export default Nav;

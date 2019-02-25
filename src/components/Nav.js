import React from "react";
import { Link } from "@reach/router";

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

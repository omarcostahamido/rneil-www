import React from "react";
import Gallery from "./Gallery.js";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className="header-message">{this.props.copy}</h1>
        <Gallery galleryImages={this.props.galleryImages} />
        <p>Exhibitions</p>
      </div>
    );
  }
}

export default Header;

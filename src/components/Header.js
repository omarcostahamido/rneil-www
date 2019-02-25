import React from "react";
import Gallery from "./Slices/Gallery.js";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className="header-message">{this.props.copy}</h1>
        <Gallery
          type="headerGallery"
          galleryImages={this.props.galleryImages}
        />
        <p id="exhibitions">Exhibitions</p>
      </div>
    );
  }
}

export default Header;

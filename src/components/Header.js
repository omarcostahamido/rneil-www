import React from "react";
import Gallery from "./Slices/Gallery.js";

const Header = props => {
  return (
    <div className="header">
      <h1 className="header__main-copy">{props.copy}</h1>
      <Gallery type="headerGallery" galleryImages={props.galleryImages} />
      <p onClick={props.handleAnchorLink} id="exhibitions">
        Exhibitions
      </p>
    </div>
  );
};

export default Header;

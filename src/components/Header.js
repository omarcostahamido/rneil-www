import React from "react";

class Header extends React.Component {
  handleGalleryBuild = galleryImages => {
    if (galleryImages) {
      return (
        <div>
          {galleryImages.map(image => {
            return <img id={galleryImages.indexOf(image)} src={image} />;
          })}
        </div>
      );
    }
  };

  render() {
    const { copy, galleryImages } = this.props;
    return (
      <div>
        <h1 className="header-message">{copy}</h1>
        {galleryImages
          ? this.handleGalleryBuild(galleryImages)
          : "https://source.unsplash.com/random"}
        <p>Exhibitions</p>
      </div>
    );
  }
}

export default Header;

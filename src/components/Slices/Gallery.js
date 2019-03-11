import React from "react";

class Gallery extends React.Component {
  //FUNCS----------------------------------
  handleImageAnimations = () => {
    const images = document.querySelectorAll("img.gallery__images");
    if (images.length > 1) {
      images.forEach(image => {
        if (
          image.getBoundingClientRect().left < window.innerWidth &&
          image.getBoundingClientRect().left > -150
        ) {
          image.classList.add("is--active");
          image.classList.remove("animate");
        } else {
          image.classList.add("animate");
          image.classList.remove("is--active");
        }
      });
    }
  };
  handleImageClick = e => {
    if (window.innerWidth > 768) {
      document.getElementById(e.target.id.toString()).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  };
  handleGalleryBuild = galleryImages => {
    if (galleryImages) {
      return (
        <div className="gallery--wrap" onScroll={this.handleImageAnimations}>
          {galleryImages.map(image => {
            return (
              <img
                className="gallery__images animate"
                id={`gallery__image-${galleryImages.indexOf(image)}`}
                key={`gallery__image-${image}-${galleryImages.indexOf(image)}`}
                src={image}
                onClick={this.handleImageClick}
              />
            );
          })}
        </div>
      );
    }
  };
  //LIFECYCLE--------------------------------------------------
  componentDidUpdate() {
    this.handleImageAnimations();
  }
  //RENDER----------------------------------------------------------
  render() {
    const { galleryImages, type } = this.props;
    return (
      <div>
        <div
          className={`gallery ${
            type && type == "headerGallery" ? "header-gallery" : "slice-slider"
          }`}
        >
          {galleryImages && this.handleGalleryBuild(galleryImages)}
        </div>
      </div>
    );
  }
}

export default Gallery;

import React from "react";

class Gallery extends React.Component {
  //STATE-------------------------------------------
  state = {
    isDesktop: false,
    imageNum: 0,
    images: []
  };

  //OTHER FUNCTIONS----------------------------------
  handleGalleryScroll = () => {
    this.handleImageAnimations(this.state.images);
  };

  handleImageAnimations = images => {
    if (images.length > 1) {
      images.forEach(image => {
        image.getBoundingClientRect().left;
        if (
          image.getBoundingClientRect().left < window.innerWidth + 100 &&
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
    if (this.state.isDesktop == true) {
      document.getElementById(e.target.id.toString()).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  };

  //if I have more styles and specific classes to add to the specific galleries,
  //do it here in handleGalleryBuild()

  handleGalleryBuild = galleryImages => {
    if (galleryImages) {
      return (
        <div className="gallery--wrap" onScroll={this.handleGalleryScroll}>
          {galleryImages.map(image => {
            return (
              <img
                className="gallery__images animate"
                id={`gallery__image-${galleryImages.indexOf(image)}`}
                key={`gallery__image-${image}-${Math.random()}`}
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
    if (window.innerWidth > 1024 && this.state.isDesktop == false) {
      this.setState({
        isDesktop: true
      });
    }
    if (document.querySelector("div.gallery--wrap")) {
      let images = document.querySelectorAll("img.gallery__images");
      // console.log(images);
      if (this.state.imageNum == 0 && images.length > 1) {
        this.setState({
          imageNum: images.length,
          images: images
        });
      }
      this.handleImageAnimations(images);
    }
  }

  //RENDER----------------------------------------------------------

  render() {
    const { galleryImages, type } = this.props;
    // console.log(this.props.galleryImages);
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

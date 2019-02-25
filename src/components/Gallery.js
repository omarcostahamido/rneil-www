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

  handleGalleryBuild = galleryImages => {
    if (galleryImages) {
      return (
        <div
          className="home-header-gallery-wrap"
          onScroll={this.handleGalleryScroll}
        >
          {galleryImages.map(image => {
            return (
              <img
                className="home-header-gallery-images animate"
                id={`home-header-gallery-image-${galleryImages.indexOf(image)}`}
                key={`home-header-gallery-image-${galleryImages.indexOf(
                  image
                )}`}
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
    if (document.querySelector("div.home-header-gallery-wrap")) {
      let images = document.querySelectorAll("img.home-header-gallery-images");
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
    const { galleryImages } = this.props;
    // console.log(this.state);
    return (
      <div>
        <div className="home-header-gallery">
          {galleryImages
            ? this.handleGalleryBuild(galleryImages)
            : "https://source.unsplash.com/random"}
        </div>
      </div>
    );
  }
}

export default Gallery;

import React from "react";

class Gallery extends React.Component {
  state = {
    isDesktop: false
  };

  handleImageClick = e => {
    if (this.state.isDesktop == true) {
      document.getElementById(e.target.id.toString()).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      });
    }
  };

  handleGalleryBuild = galleryImages => {
    if (galleryImages) {
      return (
        <div className="home-header-gallery-wrap">
          {galleryImages.map(image => {
            return (
              <img
                className="home-header-gallery-images"
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

  componentDidUpdate() {
    if (window.innerWidth > 1024 && this.state.isDesktop == false) {
      this.setState({
        isDesktop: true
      });
    }
  }

  render() {
    const { galleryImages } = this.props;
    console.log(this.state);
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

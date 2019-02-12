import React from "react";

class Gallery extends React.Component {
  handleGalleryBuild = galleryImages => {
    if (galleryImages) {
      return (
        <div>
          {galleryImages.map(image => {
            return (
              <img
                className="home-header-gallery-images"
                id={`home-header-gallery-image-${galleryImages.indexOf(image)}`}
                key={`home-header-gallery-image-${galleryImages.indexOf(
                  image
                )}`}
                src={image}
              />
            );
          })}
        </div>
      );
    }
  };

  /* need to add image numbering and updating 
  - depending on user interaction with scroll 
  can use galleryImages.indexOf(image)/galleryImages.length*/

  render() {
    const { galleryImages } = this.props;
    return (
      <div>
        {galleryImages
          ? this.handleGalleryBuild(galleryImages)
          : "https://source.unsplash.com/random"}
      </div>
    );
  }
}

export default Gallery;

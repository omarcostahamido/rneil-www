import React from "react";

const Gallery = props => {
  const handleImageAnimations = () => {
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
  const handleScroll = props.handleImageClick(".gallery--wrap");
  const handleGalleryBuild = galleryImages => {
    if (galleryImages) {
      return (
        <div className="gallery--wrap" onScroll={handleImageAnimations}>
          {galleryImages.map(image => {
            return (
              <img
                className="gallery__images animate"
                id={`gallery__image-${galleryImages.indexOf(image)}`}
                key={`gallery__image-${image}-${galleryImages.indexOf(image)}`}
                src={image}
                onClick={handleScroll}
                onLoad={handleImageAnimations}
              />
            );
          })}
        </div>
      );
    }
  };
  //RENDER----------------------------------------------------------
  return (
    <div>
      <div
        id={props.id}
        className={`gallery ${
          props.type && props.type == "headerGallery"
            ? "header-gallery"
            : "slice-slider"
        }`}
      >
        {props.galleryImages && handleGalleryBuild(props.galleryImages)}
        {props.pullQuote && (
          <h1 className="gallery__pullquote">{props.pullQuote}</h1>
        )}
      </div>
    </div>
  );
};

export default Gallery;

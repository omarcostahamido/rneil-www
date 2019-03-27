import React from "react";
import { Waypoint } from "react-waypoint";

const Gallery = props => {
  const fadeIn = props.handleFadeIn(props.id);
  const fadeOut = props.handleFadeOut(props.id);
  const transformIn = () => {
    document.getElementById(`${props.id}--wrap`).classList.add("is--transform");
  };
  const transformOut = () => {
    document
      .getElementById(`${props.id}--wrap`)
      .classList.remove("is--transform");
  };
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
        <div
          id={props.id}
          className="gallery--wrap animate"
          onScroll={handleImageAnimations}
        >
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
        id={`${props.id}--wrap`}
        className={`gallery transform ${
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
      <Waypoint
        onEnter={fadeIn}
        onLeave={fadeOut}
        bottomOffset={window.innerWidth < 768 ? "-40%" : "-70%"}
      />
      <Waypoint
        onEnter={transformIn}
        onLeave={transformOut}
        bottomOffset={window.innerWidth < 768 ? "-30%" : "-70%"}
      />
    </div>
  );
};

export default Gallery;

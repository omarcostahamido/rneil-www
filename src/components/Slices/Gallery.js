import React from "react";
import { Waypoint } from "react-waypoint";

const Gallery = props => {
  const fadeIn = props.handleFadeIn(props.id);
  const fadeOut = props.handleFadeOut(props.id);
  function transformIn() {
    document.getElementById(`${props.id}--wrap`).classList.add("is--transform");
    window.setTimeout(() => {
      document
        .getElementById(`${props.id}--wrap`)
        .classList.remove("transform");
    }, 800);
  }
  function transformOut() {
    // document
    //   .getElementById(`${props.id}--wrap`)
    //   .classList.remove("is--transform");
  }
  function handleGalleryBuild(galleryImages) {
    return (
      <div id={props.id} className="gallery--wrap">
        {galleryImages.map(image => {
          return (
            <img
              className="gallery__images "
              id={`gallery__image-${galleryImages.indexOf(image)}`}
              key={`gallery__image-${image}-${galleryImages.indexOf(image)}`}
              src={image}
              onClick={props.handleImageClick}
            />
          );
        })}
      </div>
    );
  }
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
        {props.isMobile && props.mobileImages !== []
          ? handleGalleryBuild(props.mobileImages)
          : handleGalleryBuild(props.desktopImages)}
        {props.pullQuote && (
          <h1 className="gallery__pullquote">{props.pullQuote}</h1>
        )}
      </div>
      <Waypoint
        onEnter={fadeIn}
        onLeave={fadeOut}
        bottomOffset={window.innerWidth < 768 ? "-80%" : "-70%"}
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

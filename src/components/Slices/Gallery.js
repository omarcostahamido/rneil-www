import React from "react";

const Gallery = props => {
  // console.log(props);
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
  // const handleImageClick = e => {
  //   let scrollX = 0;
  //   if (window.innerWidth > 768) {
  //     return function handleScroll(e) {
  //       //to accommodate safari not understanding scrollIntoView option obj
  //       if (
  //         /^Apple/.test(navigator.vendor) ||
  //         /^Microsoft/.test(navigator.vendor)
  //       ) {
  //         if (e.pageX / 3 + e.target.getBoundingClientRect().width > scrollX) {
  //           scrollX += e.pageX / 3 + e.target.getBoundingClientRect().width;
  //         } else {
  //           scrollX -= e.target.getBoundingClientRect().width;
  //         }
  //         document.querySelector(".gallery--wrap").scrollTo(scrollX, 0);
  //       } else {
  //         document.getElementById(e.target.id.toString()).scrollIntoView({
  //           behavior: "smooth",
  //           block: "nearest",
  //           inline: "center"
  //         });
  //       }
  //     };
  //   }
  // };
  //close over that scrollX
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

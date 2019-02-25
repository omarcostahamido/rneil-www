import React from "react";

const Panoramic_Slider_Slice = props => {
  const handleImageClick = e => {
    console.log(e.target.className);
    e.target.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  };
  return (
    <div id="pano" className="slice__pano" onClick={handleImageClick}>
      <div className="slice__pano--wrap">
        <div className="slice__pano--padding" />
        <p>Slide</p>
        <img className="slice__pano--img" src={props.panoramicImageUrl} />
      </div>
    </div>
  );
};

export default Panoramic_Slider_Slice;

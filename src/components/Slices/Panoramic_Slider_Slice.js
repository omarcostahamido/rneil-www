import React from "react";

const Panoramic_Slider_Slice = props => {
  const handleImageClick = e => {
    e.target.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  };
  return (
    <div id="pano" className="slice-pano" onClick={handleImageClick}>
      <div className="slice-pano--wrap">
        <div className="slice-pano--padding" />
        <p>swipe</p>
        <img className="slice-pano__img" src={props.panoramicImageUrl} />
      </div>
    </div>
  );
};

export default Panoramic_Slider_Slice;

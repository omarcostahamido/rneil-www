import React from "react";

const Panoramic_Slider_Slice = props => {
  const handleScroll = props.handleImageClick(".slice-pano--wrap");
  return (
    <div id="pano" className="slice-pano" onClick={handleScroll}>
      <div className="slice-pano--wrap">
        <div className="slice-pano--padding" />
        <p>swipe</p>
        <img
          className="slice-pano__img"
          id={props.id}
          src={props.panoramicImageUrl}
        />
      </div>
    </div>
  );
};

export default Panoramic_Slider_Slice;

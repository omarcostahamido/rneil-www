import React from "react";
import { Waypoint } from "react-waypoint";

const Panoramic_Slider_Slice = props => {
  const handleFadeIn = () => {
    console.log(document.getElementById(props.id));
    console.log("animating");
    document.getElementById(props.id).classList.remove("animate");
    document.getElementById(props.id).classList.add("is--active");
  };
  const handleFadeOut = () => {
    console.log("fade out");
    document.getElementById(props.id).classList.add("animate");
    document.getElementById(props.id).classList.remove("is--active");
  };
  const handleScroll = props.handleImageClick(".slice-pano--wrap");
  return (
    <div className="slice-pano" onClick={handleScroll}>
      <div className="slice-pano--wrap">
        <div className="slice-pano--padding" />
        <p>swipe</p>
        <img
          className="slice-pano__img is--transform animate"
          id={props.id}
          src={props.panoramicImageUrl}
        />
      </div>
      <Waypoint
        onEnter={handleFadeIn}
        onLeave={handleFadeOut}
        bottomOffset="-30%"
      />
    </div>
  );
};

export default Panoramic_Slider_Slice;

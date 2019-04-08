import React from "react";
import { Waypoint } from "react-waypoint";

const Panoramic_Slider_Slice = props => {
  const transformIn = () => {
    document.getElementById(`${props.id}--wrap`).classList.add("is--transform");
  };
  const transformOut = () => {
    // document
    //   .getElementById(`${props.id}--wrap`)
    //   .classList.remove("is--transform");
  };
  const fadeIn = props.handleFadeIn(props.id);
  const fadeOut = props.handleFadeOut(props.id);
  const handleScroll = props.handleImageClick(".slice-pano--wrap");
  return (
    <div className="slice-pano " onClick={handleScroll}>
      <div className="slice-pano--wrap ">
        <div className="slice-pano--padding" />
        <p>swipe</p>
        <span className="transform" id={`${props.id}--wrap`}>
          <img
            className="slice-pano__img animate"
            id={props.id}
            src={props.panoramicImageUrl}
          />
        </span>
      </div>
      <Waypoint
        onEnter={fadeIn}
        onLeave={fadeOut}
        bottomOffset={window.innerWidth < 768 ? "-70%" : "-100%"}
      />
      <Waypoint
        onEnter={transformIn}
        onLeave={transformOut}
        bottomOffset={window.innerWidth < 768 ? "-50%" : "-70%"}
      />
    </div>
  );
};

export default Panoramic_Slider_Slice;

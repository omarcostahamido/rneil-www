import React from "react";
import ReactPlayer from "react-player";
import { Waypoint } from "react-waypoint";

const Video_Module_Slice = props => {
  const handleFadeIn = () => {
    document
      .getElementById(`${props.mediaModuleUrl}`)
      .classList.remove("animate");
    document
      .getElementById(`${props.mediaModuleUrl}`)
      .classList.add("is--active");
  };

  const handleFadeOut = () => {
    document
      .getElementById(`${props.mediaModuleUrl}`)
      .classList.remove("is--active");
    document.getElementById(`${props.mediaModuleUrl}`).classList.add("animate");
  };

  return (
    <Waypoint
      onEnter={handleFadeIn}
      onLeave={handleFadeOut}
      topOffset="15%"
      bottomOffset="15%"
    >
      <div
        id={props.mediaModuleUrl}
        className={`animate video-player--wrap media ${
          props.style ? props.style : "media--wide"
        }`}
      >
        <ReactPlayer
          className="video-player"
          width="100%"
          height="100%"
          url={props.mediaModuleUrl}
        />
      </div>
    </Waypoint>
  );
};

export default Video_Module_Slice;

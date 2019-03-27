import React from "react";
import ReactPlayer from "react-player";
import { Waypoint } from "react-waypoint";

const Video_Module_Slice = props => {
  const fadeIn = props.handleFadeIn(props.id);
  const fadeOut = props.handleFadeOut(props.id);
  return (
    <Waypoint
      onEnter={fadeIn}
      onLeave={fadeOut}
      topOffset="-10%"
      bottomOffset="15%"
    >
      <div
        id={props.id}
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

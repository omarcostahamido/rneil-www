import React from "react";
import ReactPlayer from "react-player";

const Video_Module_Slice = props => {
  return (
    <div className="video-player--wrap">
      <ReactPlayer
        className="video-player"
        width="100%"
        height="100%"
        url={props.mediaModuleUrl}
      />
    </div>
  );
};

export default Video_Module_Slice;

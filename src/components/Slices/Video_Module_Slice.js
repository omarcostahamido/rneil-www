import React from "react";
import ReactPlayer from "react-player";

const Video_Module_Slice = props => {
  return (
    <ReactPlayer
      className="video-player"
      width="100vw"
      height="53vw"
      url={props.mediaModuleUrl}
    />
  );
};

export default Video_Module_Slice;

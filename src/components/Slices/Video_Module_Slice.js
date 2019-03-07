import React from "react";
import ReactPlayer from "react-player";

const Video_Module_Slice = props => {
  return (
    <ReactPlayer
      url={props.mediaModuleUrl}
      config={{
        vimeo: {
          playerOptions: {
            byline: false
          }
        }
      }}
    />
  );
};

export default Video_Module_Slice;

import React from "react";
import ReactPlayer from "react-player";

const Audio_Module_Slice = props => {
  return (
    <ReactPlayer
      height={150}
      url={props.mediaModuleUrl}
      config={{
        soundcloud: {
          options: {
            visual: false,
            show_artwork: false
          }
        }
      }}
    />
  );
};

export default Audio_Module_Slice;

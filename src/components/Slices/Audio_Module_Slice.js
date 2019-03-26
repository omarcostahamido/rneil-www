import React from "react";
import ReactPlayer from "react-player";

const Audio_Module_Slice = props => {
  return (
    <div id={props.id}>
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
    </div>
  );
};

export default Audio_Module_Slice;

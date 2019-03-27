import React from "react";
import ReactPlayer from "react-player";
import { Waypoint } from "react-waypoint";

const Audio_Module_Slice = props => {
  const fadeIn = props.handleFadeIn(props.id);
  const fadeOut = props.handleFadeOut(props.id);
  return (
    <Waypoint onEnter={fadeIn} onLeave={fadeOut}>
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
    </Waypoint>
  );
};

export default Audio_Module_Slice;

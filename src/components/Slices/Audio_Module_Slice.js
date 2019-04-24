import React from "react";
import ReactPlayer from "react-player";
import { Waypoint } from "react-waypoint";

const Audio_Module_Slice = props => {
  const fadeIn = props.handleFadeIn(props.id);
  const fadeOut = props.handleFadeOut(props.id);
  return (
    <Waypoint onEnter={fadeIn} onLeave={fadeOut}>
      <div id={props.id} className="audio-slice media--narrow">
        <ReactPlayer
          width="100%"
          height="100%"
          url={props.mediaModuleUrl}
          config={{
            soundcloud: {
              options: {
                width: "100%",
                height: "100%",
                visual: false,
                show_artwork: false,
                show_teaser: false
              }
            }
          }}
        />
      </div>
    </Waypoint>
  );
};

export default Audio_Module_Slice;

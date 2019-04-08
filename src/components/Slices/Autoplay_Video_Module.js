import React from "react";
import { Waypoint } from "react-waypoint";

//had to set innerHTML so muted attribute gets passed for Android
const Autoplay_Video_Module = props => {
  const fadeIn = props.handleFadeIn(props.id);
  const fadeOut = props.handleFadeOut(props.id);
  const vid = document.getElementById(props.autoplayVideoUrl);
  console.log(vid);
  return (
    <div className="--isLoaded">
      <div
        id={props.id}
        className={`media ${props.style} ${!(props.style == "autoplay-hero") &&
          `animate`}`}
        dangerouslySetInnerHTML={{
          __html: `
          <video
            id="${props.autoplayVideoUrl}"
            muted
            autoplay
            playsinline
            loop
            src="${props.autoplayVideoUrl}"
            type="video/mp4"
          />
        `
        }}
      />
      <Waypoint
        onEnter={props.id && fadeIn}
        onLeave={props.id && fadeOut}
        bottomOffset={window.innerWidth < 768 ? "-30%" : "-70%"}
      />
    </div>
  );
};

export default Autoplay_Video_Module;

import React, { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";

//had to set innerHTML so muted attribute gets passed for Android
const Autoplay_Video_Module = props => {
  const fadeIn = props.handleFadeIn(props.id);
  const fadeOut = props.handleFadeOut(props.id);
  let [currentPath, updatePath] = useState(window.location.href);
  useEffect(() => {
    const video = document.getElementById(props.autoplayVideoUrl);
    console.log(video);
    const fadeInVid = props.handleFadeIn(props.autoplayVideoUrl);
    const fadeOutVid = props.handleFadeOut(props.autoplayVideoUrl);
    if (video) {
      video.oncanplay = () => {
        fadeInVid();
      };
    } else {
      fadeInVid();
    }
    // //to accommodate for in btw casestudy routing
    if (props.type == "header" && currentPath != window.location.href) {
      updatePath(() => {
        currentPath = window.location.href;
      });
      fadeOutVid();
    }
  });
  return (
    <div>
      <div
        id={props.id}
        className={`media ${props.style} ${!(
          props.style == "autoplay-hero" ||
          props.style == "homepage-header__vid"
        ) && `animate`}`}
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
            class="animate"
          />
        `
        }}
      />
      {props.type !== "homepage-header" ? (
        <Waypoint
          onEnter={props.id && fadeIn}
          onLeave={props.id && fadeOut}
          bottomOffset={window.innerWidth < 768 ? "-30%" : "-70%"}
        />
      ) : null}
    </div>
  );
};

export default Autoplay_Video_Module;

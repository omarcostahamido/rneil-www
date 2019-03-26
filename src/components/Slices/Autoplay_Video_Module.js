import React from "react";

//had to set innerHTML so muted attribute gets passed for Android
const Autoplay_Video_Module = props => {
  return (
    <div>
      <div
        id={props.id}
        className={`media ${props.style}`}
        dangerouslySetInnerHTML={{
          __html: `
          <video
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
    </div>
  );
};

export default Autoplay_Video_Module;

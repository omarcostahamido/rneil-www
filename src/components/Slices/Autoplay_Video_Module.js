import React from "react";

const Autoplay_Video_Module = props => {
  return (
    <div className={`media ${props.style}`}>
      <video
        autoPlay
        loop
        muted
        src={props.autoplayVideoUrl}
        type="video/mp4"
      />
    </div>
  );
};

export default Autoplay_Video_Module;

import React from "react";

const Autoplay_Video_Module = props => {
  return (
    <div>
      <video autoPlay loop muted>
        <source src={props.autoplayVideoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default Autoplay_Video_Module;

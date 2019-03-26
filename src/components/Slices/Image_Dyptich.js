import React from "react";
import { Waypoint } from "react-waypoint";

const Image_Dyptich = props => {
  const handleFadeIn = () => {
    document.getElementById(props.id).classList.remove("animate");
    document.getElementById(props.id).classList.add("is--active");
  };
  const handleFadeOut = () => {
    // document.querySelector(".dyptich").classList.remove("is--active");
    // document.querySelector(".dyptich").classList.add("animate");
  };
  return (
    <div id={props.id} className="dyptich animate">
      <Waypoint
        onEnter={handleFadeIn}
        onLeave={handleFadeOut}
        topOffset="-10%"
      />
      <div className="dyptich__image left">
        <img src={props.dyptichUrls && props.dyptichUrls[0]} />
      </div>
      <div className="dyptich__image right">
        <img src={props.dyptichUrls && props.dyptichUrls[1]} />
      </div>
    </div>
  );
};

export default Image_Dyptich;

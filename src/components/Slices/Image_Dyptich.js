import React from "react";
import { Waypoint } from "react-waypoint";

const Image_Dyptich = props => {
  const handleFadeIn = () => {
    document.querySelector(".dyptich").classList.remove("animate");
    document.querySelector(".dyptich").classList.add("is--active");
  };
  const handleFadeOut = () => {
    document.querySelector(".dyptich").classList.remove("is--active");
    document.querySelector(".dyptich").classList.add("animate");
  };
  return (
    <Waypoint
      onEnter={handleFadeIn}
      onLeave={handleFadeOut}
      topOffset="15%"
      bottomOffset="15%"
    >
      <div className="dyptich animate">
        <div className="dyptich__image left">
          <img src={props.dyptichUrls && props.dyptichUrls[0]} />
        </div>
        <div className="dyptich__image right">
          <img src={props.dyptichUrls && props.dyptichUrls[1]} />
        </div>
      </div>
    </Waypoint>
  );
};

export default Image_Dyptich;

//onLoad={props.dyptichUrls && handleFade} - was on img tag

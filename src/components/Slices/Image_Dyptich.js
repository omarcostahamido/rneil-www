import React from "react";
import { Waypoint } from "react-waypoint";

const Image_Dyptich = props => {
  const handleFadeInLeft = () => {
    document.getElementById(`${props.id}-left`).classList.remove("animate");
    document.getElementById(`${props.id}-left`).classList.add("is--active");
  };
  const handleFadeInRight = () => {
    document.getElementById(`${props.id}-right`).classList.remove("animate");
    document.getElementById(`${props.id}-right`).classList.add("is--active");
  };
  const handleFadeOutLeft = () => {
    document.getElementById(`${props.id}-left`).classList.remove("is--active");
    document.getElementById(`${props.id}-left`).classList.add("animate");
  };
  const handleFadeOutRight = () => {
    document.getElementById(`${props.id}-right`).classList.remove("is--active");
    document.getElementById(`${props.id}-right`).classList.add("animate");
  };
  return (
    <div className="dyptich">
      <div className="dyptich__image left ">
        <Waypoint onEnter={handleFadeInLeft} onLeave={handleFadeOutLeft}>
          <img
            id={`${props.id}-left`}
            src={props.dyptichUrls && props.dyptichUrls[0]}
          />
        </Waypoint>
      </div>
      <div className="dyptich__image right">
        <Waypoint onEnter={handleFadeInRight} onLeave={handleFadeOutRight}>
          <img
            id={`${props.id}-right`}
            src={props.dyptichUrls && props.dyptichUrls[1]}
          />
        </Waypoint>
      </div>
    </div>
  );
};

export default Image_Dyptich;

/****
 * 
 *  i liked these values esp for mobile
 *  topOffset="-80%"
        bottomOffset="-15%"
 */

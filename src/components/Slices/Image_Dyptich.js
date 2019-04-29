import React from "react";
import { Waypoint } from "react-waypoint";

const Image_Dyptich = props => {
  const fadeInLeft = () => {
    document.getElementById(`${props.id}-left`).classList.remove("animate");
    document.getElementById(`${props.id}-left`).classList.add("is--active");
  };
  const fadeOutLeft = () => {
    document.getElementById(`${props.id}-left`).classList.add("animate");
    document.getElementById(`${props.id}-left`).classList.remove("is--active");
  };
  const fadeInRight = () => {
    document.getElementById(`${props.id}-right`).classList.remove("animate");
    document.getElementById(`${props.id}-right`).classList.add("is--active");
  };
  const fadeOutRight = () => {
    document.getElementById(`${props.id}-right`).classList.add("animate");
    document.getElementById(`${props.id}-right`).classList.remove("is--active");
  };
  return (
    <div className="dyptich">
      <div className="dyptich__image left ">
        <Waypoint onEnter={fadeInLeft} onLeave={fadeOutLeft}>
          <img
            className="animate"
            id={`${props.id}-left`}
            src={props.dyptichUrls && props.dyptichUrls[0]}
          />
        </Waypoint>
      </div>
      <div className="dyptich__image right ">
        <Waypoint onEnter={fadeInRight} onLeave={fadeOutRight}>
          <img
            className="animate"
            id={`${props.id}-right`}
            src={props.dyptichUrls && props.dyptichUrls[1]}
          />
        </Waypoint>
      </div>
    </div>
  );
};

export default Image_Dyptich;

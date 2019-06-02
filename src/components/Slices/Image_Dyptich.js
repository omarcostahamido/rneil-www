import React from "react";
import { Waypoint } from "react-waypoint";

const Image_Dyptich = props => {
  function fadeInLeft() {
    document.getElementById(`${props.id}-left`).classList.remove("animate");
    document.getElementById(`${props.id}-left`).classList.add("is--active");
  }
  function fadeOutLeft() {
    document.getElementById(`${props.id}-left`).classList.add("animate");
    document.getElementById(`${props.id}-left`).classList.remove("is--active");
  }
  function fadeInRight() {
    document.getElementById(`${props.id}-right`).classList.remove("animate");
    document.getElementById(`${props.id}-right`).classList.add("is--active");
  }
  function fadeOutRight() {
    document.getElementById(`${props.id}-right`).classList.add("animate");
    document.getElementById(`${props.id}-right`).classList.remove("is--active");
  }
  console.log(props);
  return (
    <div className="dyptich">
      <div className="dyptich__image left ">
        <Waypoint onEnter={fadeInLeft} onLeave={fadeOutLeft}>
          <img
            className="animate"
            id={`${props.id}-left`}
            src={
              props.isMobile && props.mobileUrls !== null
                ? props.mobileUrls[0]
                : props.desktopUrls[0]
            }
          />
        </Waypoint>
      </div>
      <div className="dyptich__image right ">
        <Waypoint onEnter={fadeInRight} onLeave={fadeOutRight}>
          <img
            className="animate"
            id={`${props.id}-right`}
            src={
              props.isMobile && props.mobileUrls !== null
                ? props.mobileUrls[1]
                : props.desktopUrls[1]
            }
          />
        </Waypoint>
      </div>
    </div>
  );
};

export default Image_Dyptich;

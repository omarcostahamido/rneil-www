import React from "react";
import { Waypoint } from "react-waypoint";

const Image_Dyptich = props => {
  const fadeInLeft = props.handleFadeIn(`${props.id}-left`);
  const fadeOutLeft = props.handleFadeOut(`${props.id}-left`);
  const fadeInRight = props.handleFadeIn(`${props.id}-right`);
  const fadeOutRight = props.handleFadeOut(`${props.id}-right`);
  //hack so waypoint wont throw warnings while getting props on about
  const intermittent = () => {};
  return (
    <div className="dyptich">
      <div className="dyptich__image left ">
        <Waypoint
          onEnter={props.id ? fadeInLeft : intermittent}
          onLeave={props.id ? fadeOutLeft : intermittent}
        >
          <img
            className="animate"
            id={props.id && `${props.id}-left`}
            src={props.dyptichUrls && props.dyptichUrls[0]}
          />
        </Waypoint>
      </div>
      <div className="dyptich__image right ">
        <Waypoint
          onEnter={props.id ? fadeInRight : intermittent}
          onLeave={props.id ? fadeOutRight : intermittent}
        >
          <img
            className="animate"
            id={props.id && `${props.id}-right`}
            src={props.dyptichUrls && props.dyptichUrls[1]}
          />
        </Waypoint>
      </div>
    </div>
  );
};

export default Image_Dyptich;

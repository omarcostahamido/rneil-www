import React from "react";
import { Waypoint } from "react-waypoint";

//can add additional css for positioning when needed - [left, right, center]
const Image_Slice = props => {
  const fadeIn = props.handleFadeIn(props.id);
  const fadeOut = props.handleFadeOut(props.id);
  return (
    <div
      className={`media ${
        props.style ? props.style.toString() : "media--wide"
      } ${props.position ? props.position : "center"}`}
    >
      <Waypoint onEnter={fadeIn} onLeave={fadeOut}>
        <img id={props.id} src={props.singleImageUrl} className="animate" />
      </Waypoint>
    </div>
  );
};

export default Image_Slice;

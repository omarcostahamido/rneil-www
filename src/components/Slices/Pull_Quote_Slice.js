import React from "react";
import { Waypoint } from "react-waypoint";

const Pull_Quote_Slice = props => {
  const handleFadeIn = () => {
    document.getElementById(`${props.id}`).classList.remove("animate");
    document.getElementById(`${props.id}`).classList.add("is--active");
  };
  const handleFadeOut = () => {
    document.getElementById(`${props.id}`).classList.add("animate");
    document.getElementById(`${props.id}`).classList.remove("is--active");
  };
  return (
    <div id={props.id} className={`pull-quote --${props.position} animate`}>
      <Waypoint onEnter={handleFadeIn} onLeave={handleFadeOut} topOffset="-10%">
        <h2>{props.pullQuoteCopy}</h2>
      </Waypoint>
    </div>
  );
};

export default Pull_Quote_Slice;

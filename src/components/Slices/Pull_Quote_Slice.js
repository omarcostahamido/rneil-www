import React from "react";
import { Waypoint } from "react-waypoint";

const Pull_Quote_Slice = props => {
  const handleFadeIn = () => {
    console.log("pullquote in");
    document.getElementById(`${props.id}`).classList.remove("animate");
    document.getElementById(`${props.id}`).classList.add("is--active");
  };
  const handleFadeOut = () => {
    console.log("pullquote out");
    document.getElementById(`${props.id}`).classList.add("animate");
    document.getElementById(`${props.id}`).classList.remove("is--active");
  };
  return (
    <div id={props.id} className={`pull-quote --${props.position} animate`}>
      <Waypoint onEnter={handleFadeIn} onLeave={handleFadeOut}>
        <h2>{props.pullQuoteCopy}</h2>
      </Waypoint>
    </div>
  );
};

export default Pull_Quote_Slice;

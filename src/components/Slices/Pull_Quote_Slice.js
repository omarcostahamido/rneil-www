import React from "react";
import { Waypoint } from "react-waypoint";

const Pull_Quote_Slice = props => {
  const fadeIn = props.handleFadeIn(props.id);
  const fadeOut = props.handleFadeOut(props.id);
  return (
    <div id={props.id} className={`pull-quote animate`}>
      <Waypoint onEnter={fadeIn} onLeave={fadeOut}>
        <h2>{props.pullQuoteCopy}</h2>
      </Waypoint>
    </div>
  );
};

export default Pull_Quote_Slice;

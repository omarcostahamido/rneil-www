import React from "react";
import { Waypoint } from "react-waypoint";

const Text_Dyptich = props => {
  const fadeIn = props.handleFadeIn(`${props.id}--text-dyptich`);
  const fadeOut = props.handleFadeOut(`${props.id}--text-dyptich`);
  return (
    <section id={`${props.id}--text-dyptich`} className="text-dyptich">
      <Waypoint onEnter={fadeIn} onLeave={fadeOut}>
        <div className="text-dyptich--wrap">
          <h2>{props.pullQuote}</h2>
          <p>{props.bodyCopy}</p>
        </div>
      </Waypoint>
    </section>
  );
};

export default Text_Dyptich;

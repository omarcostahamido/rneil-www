import React from "react";
import { Waypoint } from "react-waypoint";

const Title_Slice = props => {
  const fadeIn = props.handleFadeIn(`${props.id}--title`);
  const fadeOut = props.handleFadeOut(`${props.id}--title`);
  return (
    <section id={`${props.id}--title`} className="casestudy__title animate">
      <Waypoint onEnter={fadeIn} onLeave={fadeOut}>
        <h1>{props.title}</h1>
      </Waypoint>
    </section>
  );
};

export default Title_Slice;

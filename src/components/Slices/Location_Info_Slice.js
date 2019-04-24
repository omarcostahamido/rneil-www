import React from "react";
import { Waypoint } from "react-waypoint";

const Location_Info_Slice = props => {
  const fadeIn = props.handleFadeIn(`${props.id}__location-info`);
  const fadeOut = props.handleFadeOut(`${props.id}__location-info`);
  return (
    <section
      id={`${props.id}__location-info`}
      className="casestudy__location-info animate"
    >
      <Waypoint onEnter={fadeIn} onLeave={fadeOut} />
      <p>{props.location && props.location}</p>
      <p>{props.city && props.city}</p>
      <p>{props.year && props.year}</p>
    </section>
  );
};

export default Location_Info_Slice;

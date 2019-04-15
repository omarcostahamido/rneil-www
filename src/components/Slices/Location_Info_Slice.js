import React from "react";

const Location_Info_Slice = props => {
  return (
    <section className="casestudy__location-info">
      <p>{props.location && props.location}</p>
      <p>{props.city && props.city}</p>
      <p>{props.year && props.year}</p>
    </section>
  );
};

export default Location_Info_Slice;
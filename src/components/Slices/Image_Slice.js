import React from "react";

const Image_Slice = props => {
  return (
    <div
      className={`media ${
        props.style ? props.style.toString() : "media--wide"
      } ${props.position ? props.position : "center"}`}
    >
      <img src={props.singleImageUrl} />
    </div>
  );
};

export default Image_Slice;

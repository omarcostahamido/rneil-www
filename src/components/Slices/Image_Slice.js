import React from "react";

const Image_Slice = props => {
  return (
    <div
      className={`media ${
        props.style ? props.style.toString() : "media--wide"
      }`}
    >
      <img src={props.singleImageUrl} />
    </div>
  );
};

export default Image_Slice;

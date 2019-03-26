import React from "react";

//can add additional css for positioning when needed - [left, right, center]
const Image_Slice = props => {
  return (
    <div
      className={`media ${
        props.style ? props.style.toString() : "media--wide"
      } ${props.position ? props.position : "center"}`}
    >
      <img id={props.id} src={props.singleImageUrl} />
    </div>
  );
};

export default Image_Slice;

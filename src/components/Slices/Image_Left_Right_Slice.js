import React from "react";

const Image_Left_Right_Slice = props => {
  return (
    <div
      className={
        props.orientation && props.orientation == "left"
          ? "slice__image--left"
          : "slice__image--right"
      }
    >
      <img src={props.imageLeftRightUrl} />
      {props.imageLeftRightCopy ? (
        <h1>{props.imageLeftRightCopy.text}</h1>
      ) : null}
    </div>
  );
};

export default Image_Left_Right_Slice;

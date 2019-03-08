import React from "react";

const Image_Left_Right_Slice = props => {
  const checkForCopy = () => {
    if (props.imageLeftRightCopy) {
      return (
        <div>
          <h1>{props.imageLeftRightCopy.text}</h1>
        </div>
      );
    }
  };
  return (
    <div
      className={
        props.orientation && props.orientation == "left"
          ? "slice__image--left"
          : "slice__image--right"
      }
    >
      <img src={props.imageLeftRightUrl} />
      {checkForCopy()}
    </div>
  );
};

export default Image_Left_Right_Slice;

import React from "react";

const Image_Dyptich = props => {
  return (
    <div className="dyptich">
      <img
        className="dyptich__image left"
        src={props.dyptichUrls && props.dyptichUrls[0]}
      />
      <img
        className="dyptich__image right"
        src={props.dyptichUrls && props.dyptichUrls[1]}
      />
    </div>
  );
};

export default Image_Dyptich;

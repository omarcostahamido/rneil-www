import React from "react";

const Image_Dyptich = props => {
  return (
    <div>
      <img src={props.dyptichUrls && props.dyptichUrls[0]} />
      <img src={props.dyptichUrls && props.dyptichUrls[1]} />
    </div>
  );
};

export default Image_Dyptich;

import React from "react";

const Image_Dyptich = props => {
  const handleFade = () => {
    document.querySelector(".dyptich--wrapper").classList.remove("animate");
    document.querySelector(".dyptich--wrapper").classList.add("is--active");
  };
  return (
    <div className="dyptich">
      <div className="dyptich__image left">
        <img
          onLoad={props.dyptichUrls && handleFade}
          src={props.dyptichUrls && props.dyptichUrls[0]}
        />
      </div>
      <div className="dyptich__image right">
        <img src={props.dyptichUrls && props.dyptichUrls[1]} />
      </div>
    </div>
  );
};

export default Image_Dyptich;

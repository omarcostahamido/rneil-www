import React from "react";

const Header_Slice = props => {
  //add conditional to the style of the header whether it's a vid??
  //or just pull autoplay vid slice with extra parameters??
  return (
    <div>
      <div
        className="casestudy__header"
        style={{
          backgroundColor: "inherit",
          backgroundImage: `url(${props.casestudyHero})`,
          WebkitBackgroundSize: "cover",
          MozBackgroundSize: "cover",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        <div className="header--info">
          <h1>{props.titleCopy}</h1>
          <svg width="13px" height="15px" viewBox="0 0 13 15">
            <g stroke="#FFFFFF">
              <path
                d="M12.5,7.05882353 L6.5,14.1176471 L0.5,7.05882353 M6.5,14.1176471 L6.5,0.882352941 L6.5,14.1176471"
                id="Arrow"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header_Slice;

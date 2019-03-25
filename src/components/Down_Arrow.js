import React from "react";

const Down_Arrow = props => {
  return (
    <svg width="13px" height="15px" viewBox="0 0 13 15">
      <g
        stroke={
          props.titleCopyColor && props.titleCopyColor === "black"
            ? "#000"
            : "#FFF"
        }
      >
        <path
          d="M12.5,7.05882353 L6.5,14.1176471 L0.5,7.05882353 M6.5,14.1176471 L6.5,0.882352941 L6.5,14.1176471"
          fill="transparent"
        />
      </g>
    </svg>
  );
};

export default Down_Arrow;

import React from "react";
import { Link } from "@reach/router";

const Next_Btn = props => {
  function fadeOutCasestudy() {
    console.log("fading out");
    document.querySelector(".casestudy__header").classList.remove("is--active");
    document.querySelector(".casestudy__header").classList.add("animate");
  }
  return (
    <footer className="next-btn" onClick={fadeOutCasestudy}>
      <Link to={props.url}>next exhibition</Link>
      <svg width="24px" height="13px" viewBox="0 0 24 13">
        <g
          transform="translate(-320.000000, -8032.000000)"
          stroke={props.colorMode}
        >
          <g transform="translate(182.000000, 8025.000000)">
            <g transform="translate(150.000000, 13.500000) rotate(-90.000000) translate(-150.000000, -13.500000) translate(143.500000, 0.500000)">
              <path
                d="M12.5,17 L6.5,25 L0.5,17 M6.5,25 L6.5,1 L6.5,25"
                id="Arrow"
                fill="transparent"
              />
            </g>
          </g>
        </g>
      </svg>
    </footer>
  );
};

export default Next_Btn;

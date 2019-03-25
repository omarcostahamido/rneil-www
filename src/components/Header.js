import React from "react";
import Down_Arrow from "./Down_Arrow";

const Header = props => {
  return (
    <div className="header">
      <h1 className="header__main-copy">{props.copy}</h1>
      <p onClick={props.handleAnchorLink} id="exhibitions">
        Exhibitions
      </p>
      <Down_Arrow titleCopyColor="black" />
    </div>
  );
};

export default Header;

import React from "react";

const Header = props => {
  return (
    <div className="header">
      <h1 className="header__main-copy">{props.copy}</h1>
      <p onClick={props.handleAnchorLink} id="exhibitions">
        Exhibitions
      </p>
    </div>
  );
};

export default Header;

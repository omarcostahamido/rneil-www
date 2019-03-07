import React from "react";
import Nav from "./Nav";

const Exhibitions = props => {
  return (
    <div>
      <Nav class="--dark-mode" color="#fff" page="work" />
      {props.renderCasestudies()}
    </div>
  );
};

export default Exhibitions;

import React from "react";
import Nav from "./Nav";

const Exhibitions = props => {
  props.scrollTop();
  return (
    <div className="work --isLoaded">
      <Nav class="--dark-mode" color="#fff" page="work" />
      {props.renderCasestudies()}
    </div>
  );
};

export default Exhibitions;

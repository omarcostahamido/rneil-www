import React from "react";
import Nav from "./Nav";

const Exhibitions = props => {
  const scrollTop = () => {
    if (window.pageYOffset > 0) {
      window.scrollTo(0, 0);
    }
  };
  scrollTop();
  return (
    <div className="work">
      <Nav class="--dark-mode" color="#fff" page="work" />
      {props.renderCasestudies()}
    </div>
  );
};

export default Exhibitions;

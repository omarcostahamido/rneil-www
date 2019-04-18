import React from "react";
import Nav from "./Nav";

const Exhibitions = props => {
  props.scrollTop();
  return (
    <main className="--isLoaded">
      <Nav class="--dark-mode" color="#fff" page="work" />
      <section className="work">{props.renderCasestudies()}</section>
    </main>
  );
};

export default Exhibitions;

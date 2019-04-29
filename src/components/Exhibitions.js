import React, { useEffect } from "react";
import Nav from "./Nav";

const Exhibitions = props => {
  useEffect(() => {
    props.scrollTop();
  }, []);
  return (
    <main className="--isLoaded">
      <Nav class="--dark-mode" color="#fff" page="work" />
      <section className="work">{props.renderCasestudies()}</section>
    </main>
  );
};

export default Exhibitions;

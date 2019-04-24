import React from "react";
import Logo from "./Logo";

const Loader = props => {
  return (
    <main
      className={
        props.isLoading && window.location.pathname === "/"
          ? "isLoading"
          : "loaded"
      }
    >
      <Logo class={props.class} isLoader={true} />
    </main>
  );
};

export default Loader;

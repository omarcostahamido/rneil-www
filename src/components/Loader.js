import React from "react";
import Logo from "./Logo";

const Loader = props => {
  return (
    <div
      className={
        props.isLoading && window.location.pathname === "/"
          ? "isLoading"
          : "loaded"
      }
    >
      <Logo class={props.class} isLoader={true} />
    </div>
  );
};

export default Loader;

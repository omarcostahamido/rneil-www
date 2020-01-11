import React, { useEffect, useState } from "react";
import Logo from "./Logo";

const Loader = props => {
  return (
    <main
      className={
        props.isLoading && window.location.pathname === "/"
          ? "isLoading"
          : "loaded"
      }
      style={window.innerWidth <= 1024 ? { height: window.innerHeight } : null}
    >
      <Logo class={`${props.class}`} isLoader={true} />
    </main>
  );
};

export default Loader;

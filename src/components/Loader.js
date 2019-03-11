import React from "react";

const Loader = props => {
  console.log('loading')
  return (
    <div className={props.isLoading ? "isLoading" : "loaded"}>loading!!</div>
  );
};

export default Loader;

import React from "react";

const Pull_Quote_Slice = props => {
  return (
    <div className={`pull-quote --${props.position}`}>
      <h2>{props.pullQuoteCopy}</h2>
    </div>
  );
};

export default Pull_Quote_Slice;

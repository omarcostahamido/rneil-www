import React from "react";

const Body_Text_Slice = props => {
  return (
    <div className={`body-copy--flex --${props.position}`}>
      <div className="body-copy">
        <p>{props.bodyCopy}</p>
      </div>
    </div>
  );
};

export default Body_Text_Slice;

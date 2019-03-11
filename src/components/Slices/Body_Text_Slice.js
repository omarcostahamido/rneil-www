import React from "react";

/* could pass more info from api here to configure different classes based
on what type of body copy it is */

const Body_Text_Slice = props => {
  return (
    <div>
      <p>{props.bodyCopy}</p>
    </div>
  );
};

export default Body_Text_Slice;

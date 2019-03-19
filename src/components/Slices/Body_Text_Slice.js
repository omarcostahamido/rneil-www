import React from "react";

const Body_Text_Slice = props => {
  const handleRichText = props => {
    if (props.bodyCopy.length === 1) {
      return <p>{props.bodyCopy[0].text}</p>;
    } else {
      return props.bodyCopy.map(textItem => {
        if (textItem.text == "") {
          return <br />;
        } else {
          return <p>{textItem.text}</p>;
        }
      });
    }
  };
  return (
    <div className={`body-copy--flex --${props.position}`}>
      <div className="body-copy">{handleRichText(props)}</div>
    </div>
  );
};

export default Body_Text_Slice;

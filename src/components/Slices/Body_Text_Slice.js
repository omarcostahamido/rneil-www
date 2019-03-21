import React from "react";

const Body_Text_Slice = props => {
  const handleRichText = props => {
    if (props.bodyCopy.length === 1) {
      return <p>{props.bodyCopy[0].text}</p>;
    } else {
      return props.bodyCopy.map(textItem => {
        console.log(textItem.text);
        if (textItem.text == "") {
          return <br key={textItem.text + Math.random().toFixed(4)} />;
        } else {
          return <p key={textItem.text.slice(0, 8)}>{textItem.text}</p>;
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

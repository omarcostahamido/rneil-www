import React from "react";

const Body_Text_Slice = props => {
  const handleRichText = props => {
    if (props.bodyCopy.length === 1) {
      return <p>{props.bodyCopy[0].text}</p>;
    } else {
      let i = 2;
      return props.bodyCopy.map(textItem => {
        i++;
        if (textItem.text == "") {
          return <br key={"br-" + props.bodyCopy[0].text.slice(0, i)} />;
        } else {
          return <p key={textItem.text.slice(0, 8)}>{textItem.text}</p>;
        }
      });
    }
  };
  return (
    <div className={`body-copy--flex --${props.position}`}>
      <div id={props.id} className="body-copy">
        {handleRichText(props)}
      </div>
    </div>
  );
};

export default Body_Text_Slice;

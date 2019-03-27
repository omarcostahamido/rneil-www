import React from "react";
import { Waypoint } from "react-waypoint";

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
  const fadeIn = props.handleFadeIn(props.id);
  const fadeOut = props.handleFadeOut(props.id);
  return (
    <div className={`body-copy--flex --${props.position}`}>
      <div id={props.id} className="body-copy">
        <Waypoint onEnter={fadeIn} onLeave={fadeOut}>
          {handleRichText(props)}
        </Waypoint>
      </div>
    </div>
  );
};

export default Body_Text_Slice;

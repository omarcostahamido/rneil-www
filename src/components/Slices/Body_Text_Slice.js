import React from "react";
import { RichText } from "prismic-reactjs";
import { Waypoint } from "react-waypoint";

const Body_Text_Slice = props => {
  const fadeIn = props.handleFadeIn(props.id);
  const fadeOut = props.handleFadeOut(props.id);
  return (
    <div id={props.id} className={`body-copy animate --${props.position}`}>
      <Waypoint onEnter={fadeIn} onLeave={fadeOut}>
        <span>
          {props.id == "about__body-slice" ? (
            <p>{props.bodyCopy}</p>
          ) : (
            RichText.render(props.bodyCopy)
          )}
        </span>
      </Waypoint>
    </div>
  );
};

export default Body_Text_Slice;

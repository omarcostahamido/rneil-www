import React from "react";
import { Waypoint } from "react-waypoint";

//this links to casestudy/${id}
const Casestudy_Featured = props => {
  //div that gets faded is in routes-renderCasestudies()
  const fadeIn = () => {
    const el = document.querySelector(`.${props.class}`);
    el.classList.remove("animate");
    el.classList.add("is--active");
  };
  const fadeOut = () => {
    const el = document.querySelector(`.${props.class}`);
    el.classList.add("animate");
    el.classList.remove("is--active");
  };
  return (
    <div>
      <Waypoint onEnter={fadeIn} onLeave={fadeOut}>
        <div className="casestudy-featured">
          <img
            className="casestudy-featured__hero"
            src={
              props.heroMobile && window.innerWidth < 768
                ? props.heroMobile
                : props.hero
            }
          />
          <p className="casestudy-featured__title">{props.title}</p>
        </div>
      </Waypoint>
    </div>
  );
};

export default Casestudy_Featured;

//

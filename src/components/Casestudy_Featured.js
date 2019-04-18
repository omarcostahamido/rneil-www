import React from "react";
import { Waypoint } from "react-waypoint";

//this links to casestudy/${id}
const Casestudy_Featured = props => {
  //div that gets faded is in routes-renderCasestudies()
  //also wide/narrow in grid is ^^^
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
        <div
          className={`casestudy-featured ${
            props.color === "black" ? "--black" : "--white"
          }`}
        >
          <img
            className="casestudy-featured__hero"
            src={
              props.heroMobile && window.innerWidth < 1024
                ? props.heroMobile
                : props.hero
            }
          />
          <div className="casestudy-featured__info">
            <p className="casestudy-featured__title">{props.title}</p>
            <p>{props.year}</p>
          </div>
        </div>
      </Waypoint>
    </div>
  );
};

export default Casestudy_Featured;

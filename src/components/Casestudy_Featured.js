import React, { useEffect } from "react";
import { Waypoint } from "react-waypoint";

//this links to casestudy/${id}
const Casestudy_Featured = props => {
  const fadeInResize = e => {
    console.log(e);
    const el = document.querySelector(`.${props.class}`);
    if (e.target.innerWidth >= 1280) {
      el.classList.remove("animate");
      el.classList.add("is--active");
    }
  };
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
  //hook to ensure casestudies fade in even after resize - parallax interference
  useEffect(() => {
    console.log("effect");
    //hook will run this on initial mount
    window.addEventListener("resize", fadeInResize);
    // //hook runs this callback on unmount
    return window.removeEventListener("resize", fadeIn);
  }, []);
  return (
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
  );
};

export default Casestudy_Featured;

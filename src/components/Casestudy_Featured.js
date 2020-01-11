import React, { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";

//this links to casestudy/${id}
const Casestudy_Featured = props => {
  function fadeInResize(e) {
    const el = document.querySelector(`.${props.class}`);
    if (e.target.innerWidth >= 1280) {
      el.classList.remove("animate");
      el.classList.add("is--active");
    }
  }
  //div that gets faded is in routes-renderCasestudies()
  //also wide/narrow in grid is ^^^
  function fadeIn() {
    const el = document.querySelector(`.${props.class}`);
    el.classList.remove("animate");
    el.classList.add("is--active");
  }
  function fadeOut() {
    const el = document.querySelector(`.${props.class}`);
    el.classList.add("animate");
    el.classList.remove("is--active");
  }
  const [hero, setHero] = useState(0);
  function handleWhichHero() {
    (props.heroMobile && window.innerWidth < 1024) ||
    document.documentElement.clientWidth < 1024
      ? setHero(props.heroMobile)
      : setHero(props.hero);
  }
  //hook to ensure casestudies fade in & heros update even after resize
  useEffect(() => {
    handleWhichHero();
    //hook will run this on initial mount
    window.addEventListener("resize", fadeInResize);
    window.addEventListener("resize", handleWhichHero);
    // //hook runs this callback on unmount
    return function removeResizeEvents() {
      window.removeEventListener("resize", fadeInResize);
      window.removeEventListener("resize", handleWhichHero);
    };
  }, []);
  return (
    <Waypoint onEnter={fadeIn} onLeave={fadeOut}>
      <div
        className={`casestudy-featured ${
          props.color === "black" ? "--black" : "--white"
        }`}
      >
        <img className="casestudy-featured__hero" src={hero} />
        <div className="casestudy-featured__info">
          <p className="casestudy-featured__title">{props.title}</p>
          <p>{props.year}</p>
        </div>
      </div>
    </Waypoint>
  );
};

export default Casestudy_Featured;

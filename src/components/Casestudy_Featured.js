import React from "react";

//this links to casestudy/${id}

const Casestudy_Featured = props => {
  return (
    <div>
      <div className="casestudy">
        <img
          className="casestudy-hero"
          src={
            props.heroMobile && window.innerWidth < 768
              ? props.heroMobile
              : props.hero
          }
        />
        <p className="casestudy-title">{props.title}</p>
      </div>
    </div>
  );
};

export default Casestudy_Featured;

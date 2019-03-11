import React from "react";

//this links to casestudy/${id}

const Casestudy_Featured = props => {
  return (
    <div>
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
    </div>
  );
};

export default Casestudy_Featured;

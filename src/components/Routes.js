import React from "react";
import Homepage from "./Homepage.js";
import { Router, Link } from "@reach/router";
import Casestudy from "./Casestudy.js";
import Casestudy_Featured from "./Casestudy_Featured";
import About from "./About";
import Exhibitions from "./Exhibitions";
import Not_Found from "./Not_Found";

const Routes = props => {
  //Common Funcs passed down to kids--------------------------
  const renderCasestudies = () => {
    if (props.casestudyData) {
      return (
        <div>
          {props.casestudyData.map(casestudy => {
            return (
              <Link
                to={`/${casestudy.slugs[0]}/${casestudy.id}`}
                key={casestudy.slugs[0]}
              >
                <Casestudy_Featured
                  title={casestudy.data.casestudy_title[0].text}
                  hero={casestudy.data.casestudy_hero_image.url}
                  heroMobile={casestudy.data.casestudy_hero_image_mobile.url}
                />
              </Link>
            );
          })}
        </div>
      );
    }
  };
  //-----for slice fade-ins
  const handleFadeIn = elementId => {
    const el = document.getElementById(elementId);
    return () => {
      el.classList.remove("animate");
      el.classList.add("is--active");
    };
  };
  const handleFadeOut = elementId => {
    const el = document.getElementById(elementId);
    return () => {
      el.classList.add("animate");
      el.classList.remove("is--active");
    };
  };
  //-----HACK to fix weird scroll bug between Router Links
  const scrollTop = () => {
    if (window.pageYOffset > 0) {
      window.scrollTo(0, 0);
    }
  };
  //RENDER-------------------------------------------------------
  return (
    <div>
      <Router>
        <Homepage
          path="/"
          data={props.homePageData}
          renderCasestudies={renderCasestudies}
          isLoading={props.isLoading}
          handleFadeIn={handleFadeIn}
          handleFadeOut={handleFadeOut}
        />
        <Casestudy
          path=":slug/:id"
          order={props.casestudyOrder}
          scrollTop={scrollTop}
          isLoading={props.isLoading}
          handleFadeIn={handleFadeIn}
          handleFadeOut={handleFadeOut}
        />
        <Exhibitions
          path="work"
          renderCasestudies={renderCasestudies}
          scrollTop={scrollTop}
          isLoading={props.isLoading}
          handleFadeIn={handleFadeIn}
          handleFadeOut={handleFadeOut}
        />
        <About
          path="about"
          data={props.aboutPageData}
          scrollTop={scrollTop}
          isLoading={props.isLoading}
          handleFadeIn={handleFadeIn}
          handleFadeOut={handleFadeOut}
        />
        <Not_Found default />
      </Router>
    </div>
  );
};

export default Routes;

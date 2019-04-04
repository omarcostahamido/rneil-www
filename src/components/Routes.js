import React, { lazy, Suspense } from "react";
import Homepage from "./Homepage.js";
import { Router, Link } from "@reach/router";
import Loader from "./Loader";
const Casestudy = lazy(() => import("./Casestudy"));
const Casestudy_Featured = lazy(() => import("./Casestudy_Featured"));
const About = lazy(() => import("./About"));
const Exhibitions = lazy(() => import("./Exhibitions"));
const Not_Found = lazy(() => import("./Not_Found"));

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
                <div className={`${casestudy.id}--feat animate`}>
                  <Casestudy_Featured
                    class={`${casestudy.id}--feat`}
                    title={casestudy.data.casestudy_title[0].text}
                    hero={casestudy.data.casestudy_hero_image.url}
                    heroMobile={casestudy.data.casestudy_hero_image_mobile.url}
                    handleFadeIn={handleFadeIn}
                    handleFadeOut={handleFadeOut}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      );
    }
  };
  const handleFadeIn = elementId => {
    const el = document.getElementById(elementId);
    // console.log(el);
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
      <Suspense
        fallback={<Loader isLoading={props.isLoading} class="--dark-mode" />}
      >
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
      </Suspense>
    </div>
  );
};

export default Routes;

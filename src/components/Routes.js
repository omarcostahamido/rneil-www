import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";
// import Homepage from "./Homepage.js";
import { Router, Link } from "@reach/router";
import Loader from "./Loader";
const Homepage = lazy(() => import("./Homepage.js"));
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
        <div className="casestudy-featured--grid">
          {props.casestudyData.map(casestudy => {
            return (
              <span
                key={casestudy.slugs[0]}
                className={
                  casestudy.data.grid_style
                    ? casestudy.data.grid_style
                    : "grid--narrow"
                }
              >
                <Link
                  className={`${casestudy.slugs[0]}--feat`}
                  to={`/${casestudy.slugs[0]}/${casestudy.id}`}
                >
                  <article className={`${casestudy.id}--feat animate`}>
                    <Casestudy_Featured
                      class={`${casestudy.id}--feat`}
                      title={casestudy.data.casestudy_title[0].text}
                      color={casestudy.data.home_info_color}
                      hero={casestudy.data.casestudy_hero_image.url}
                      heroMobile={
                        casestudy.data.casestudy_hero_image_mobile.url
                      }
                      year={
                        casestudy.data.casestudy_year[0].text
                          ? casestudy.data.casestudy_year[0].text
                          : null
                      }
                      handleFadeIn={handleFadeIn}
                      handleFadeOut={handleFadeOut}
                    />
                  </article>
                </Link>
              </span>
            );
          })}
        </div>
      );
    }
  };
  const handleFadeIn = elementId => {
    const el = document.getElementById(elementId);
    // console.log(el);
    if (el) {
      return () => {
        el.classList.remove("animate");
        el.classList.add("is--active");
      };
    }
  };
  const handleFadeOut = elementId => {
    const el = document.getElementById(elementId);
    // console.log(el);
    if (el) {
      return () => {
        el.classList.add("animate");
        el.classList.remove("is--active");
      };
    }
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
Routes.propTypes = {
  isLoading: PropTypes.bool,
  homePageData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      data: PropTypes.object
    })
  ),
  casestudyOrder: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      slug: PropTypes.string,
      order: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  casestudyData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      data: PropTypes.object
    })
  ),
  aboutPageData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      data: PropTypes.object
    })
  )
};
export default Routes;

import React from "react";
import Homepage from "./Homepage.js";
import { Router, Link } from "@reach/router";
import Casestudy from "./Casestudy.js";
import Casestudy_Featured from "./Casestudy_Featured";
import About from "./About";
import Exhibitions from "./Exhibitions";
import Not_Found from "./Not_Found";
import Loader from "./Loader";

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
          apiEndpoint={process.env.REACT_APP_BASE_URL}
          renderCasestudies={renderCasestudies}
          data={props.homePageData}
        />
        <Casestudy
          path=":slug/:id"
          apiEndpoint={process.env.REACT_APP_BASE_URL}
          order={props.casestudyOrder}
        />
        <Exhibitions
          path="work"
          renderCasestudies={renderCasestudies}
          scrollTop={scrollTop}
        />
        <About
          path="about"
          apiEndpoint={process.env.REACT_APP_BASE_URL}
          scrollTop={scrollTop}
          data={props.aboutPageData}
        />
        <Not_Found default />
      </Router>
    </div>
  );
};

export default Routes;
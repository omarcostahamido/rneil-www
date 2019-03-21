import React from "react";
import Homepage from "./Homepage.js";
import { Router, Link } from "@reach/router";
import Casestudy from "./Casestudy.js";
import Casestudy_Featured from "./Casestudy_Featured";
import About from "./About";
import Exhibitions from "./Exhibitions";
import Not_Found from "./Not_Found";
import Loader from "./Loader";
import Prismic from "prismic-javascript";

class Data_And_Routes extends React.Component {
  state = {
    casestudiesFeatured: null,
    casestudyNum: null,
    casestudyOrder: [],
    isLoading: false
  };
  //FUNCS--------------------------------------------
  getCasestudyOrder = () => {
    this.setState({
      isLoading: true
    });
    Prismic.api(process.env.REACT_APP_BASE_URL, {
      accessToken: process.env.REACT_APP_ACCESS_TOKEN
    }).then(api => {
      api
        .query(Prismic.Predicates.at("document.type", "casestudy"), {
          fetch: [
            "casestudy.casestudy_order",
            "casestudy.casestudy_hero_image",
            "casestudy.casestudy_hero_image_mobile",
            "casestudy.casestudy_title",
            "casestudy.slugs",
            "casestudy.id"
          ]
        })
        .then(response => {
          if (response) {
            this.setState({
              casestudiesFeatured: response.results,
              casestudyNum: response.results.length
            });
            // console.log(this.state);
            this.reorderCasestudies();
          }
        })
        .catch(error => console.log(error));
    });
  };
  reorderCasestudies = () => {
    if (this.state.casestudiesFeatured) {
      let casestudiesFeatured = [];
      let order = [];
      let casestudyOrder = [];
      let checkOutliers = false;
      this.state.casestudiesFeatured.forEach(casestudy => {
        order.push(casestudy.data.casestudy_order);
      });
      //check for duplicates in order data from prismic
      const checkDuplicates = order.reduce(function(acc, el, i, arr) {
        if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el);
        return acc;
      }, []);
      //check for outliers in order data
      this.state.casestudiesFeatured.forEach(casestudy => {
        if (
          casestudy.data.casestudy_order > this.state.casestudiesFeatured.length
        ) {
          console.log("outliers!! check prismic for casestudy order");
          checkOutliers = true;
        }
      });
      //if there are no duplicates/outliers, set state for order and featured
      //otherwise...set order for the current prismic order
      if (!checkDuplicates.length && !checkOutliers) {
        console.log("casestudies rendering in order");
        for (let i = 0; i < this.state.casestudyNum; i++) {
          casestudiesFeatured.push(i);
        }
        this.state.casestudiesFeatured.forEach(casestudy => {
          casestudiesFeatured[casestudy.data.casestudy_order - 1] = casestudy;
          casestudyOrder.push({
            id: casestudy.id,
            slug: casestudy.slugs[0],
            order: casestudy.data.casestudy_order
          });
        });
        if (this.state.casestudiesFeatured) {
          this.setState({
            casestudiesFeatured,
            casestudyOrder
          });
        }
      } else {
        this.state.casestudiesFeatured.forEach(casestudy => {
          casestudyOrder.push({
            id: casestudy.id,
            slug: casestudy.slugs[0],
            order: casestudy.data.casestudy_order
          });
        });
        if (casestudyOrder) {
          this.setState({
            casestudyOrder
          });
        }
        console.log(
          "duplicates or outliers!! check prismic for casestudy order no. " +
            checkDuplicates
        );
      }
    }
  };
  //Common Funcs passed down to kids--------------------------
  renderCasestudies = () => {
    if (this.state.casestudiesFeatured) {
      return (
        <div>
          {this.state.casestudiesFeatured.map(casestudy => {
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
  //HACK to fix weird scroll bug between Router Links
  scrollTop = () => {
    if (window.pageYOffset > 0) {
      window.scrollTo(0, 0);
    }
  };
  //LIFECYCLE----------------------------------------------------
  componentDidMount() {
    this.getCasestudyOrder();
  }
  // componentDidUpdate() {
  //   not sure why this is here - commented out to see
  //   this.render();
  // }
  //RENDER-------------------------------------------------------
  render() {
    return (
      <div>
        <Router>
          <Homepage
            path="/"
            apiEndpoint={process.env.REACT_APP_BASE_URL}
            renderCasestudies={this.renderCasestudies}
          />
          <Casestudy
            path=":slug/:id"
            apiEndpoint={process.env.REACT_APP_BASE_URL}
            order={this.state.casestudyOrder}
          />
          <Exhibitions
            path="work"
            renderCasestudies={this.renderCasestudies}
            scrollTop={this.scrollTop}
          />
          <About
            path="about"
            apiEndpoint={process.env.REACT_APP_BASE_URL}
            scrollTop={this.scrollTop}
          />
          <Not_Found default />
        </Router>
      </div>
    );
  }
}

export default Data_And_Routes;

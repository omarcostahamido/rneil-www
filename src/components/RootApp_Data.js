import React from "react";
import Routes from "./Routes";
import Prismic from "prismic-javascript";

class RootApp_Data extends React.Component {
  state = {
    homePage: null,
    aboutPage: null,
    casestudiesFeatured: null,
    casestudyOrder: [],
    isLoading: true
  };
  getPrismicData = () => {
    Prismic.api(process.env.REACT_APP_BASE_URL, {
      accessToken: process.env.REACT_APP_ACCESS_TOKEN
    }).then(api => {
      api
        .query(
          Prismic.Predicates.any("document.type", [
            "home_page_header",
            "casestudy",
            "about_page"
          ]),
          {
            fetch: [
              "home_page_header.home_page_header_title_copy",
              "home_page_header.header_image_desktop",
              "home_page_header.header_image_mobile",
              "home_page_header.header_autoplay_vid",
              "home_page_header.header_autoplay_vid_mobile",
              "casestudy.casestudy_order",
              "casestudy.casestudy_hero_image",
              "casestudy.casestudy_hero_image_mobile",
              "casestudy.casestudy_title",
              "casestudy.casestudy_year",
              "casestudy.slugs",
              "casestudy.id",
              "about_page.about_page_copy",
              "about_page.about_page_image",
              "about_page.about_page_main_copy",
              "about_page.about_page_image_2",
              "about_page.about_page_videos",
              "about_page.id"
            ]
          }
        )
        .then(response => {
          if (response) {
            this.setState({
              doc: response.results
            });
            this.cleanData();
            this.removeLoader();
          }
        })
        .catch(error => console.log(error));
    });
  };
  removeLoader = () => {
    window.setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 2000);
  };
  cleanData = () => {
    if (this.state.doc) {
      let casestudiesFeatured = [];
      let homePage = [];
      let aboutPage = [];
      this.state.doc.forEach(page => {
        if (page.type === "casestudy") {
          casestudiesFeatured.push(page);
        } else if (page.type === "about_page") {
          aboutPage.push(page);
        } else if (page.type === "home_page_header") {
          homePage.push(page);
        }
      });
      if (casestudiesFeatured.length > 1 || homePage || aboutPage) {
        this.setState({
          casestudiesFeatured,
          homePage,
          aboutPage
        });
      }
    }
    if (this.state.casestudiesFeatured) {
      this.reorderCasestudies();
    }
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
  componentDidMount() {
    this.getPrismicData();
  }
  render() {
    return (
      <div>
        <Routes
          isLoading={this.state.isLoading}
          homePageData={this.state.homePage}
          aboutPageData={this.state.aboutPage}
          casestudyData={this.state.casestudiesFeatured}
          casestudyOrder={this.state.casestudyOrder}
        />
      </div>
    );
  }
}

export default RootApp_Data;

//<Loader isLoading={this.state.isLoading} class="--dark-mode" />
//could add nav here and conditionally set styles

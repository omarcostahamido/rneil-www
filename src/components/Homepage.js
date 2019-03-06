import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Prismic from "prismic-javascript";

class Homepage extends React.Component {
  state = {
    doc: null,
    headerMainCopy: "how terrible and how beautiful",
    headerImageSlider: []
  };

  //Data Handling functions----------------------

  getPrismicData = () => {
    const { apiEndpoint } = this.props;
    Prismic.api(apiEndpoint, {
      accessToken: process.env.REACT_APP_ACCESS_TOKEN
    }).then(api => {
      api
        .query(Prismic.Predicates.at("document.type", "home_page_header"), {
          fetch: [
            "home_page_header.home_page_header_title_copy",
            "home_page_header.home_page_header_slider_images"
          ]
        })
        .then(response => {
          if (response) {
            this.setState({
              doc: response.results
            });
            // console.log(this.state.doc);
            this.handleCleanData();
          }
        })
        .catch(error => console.log(error));
    });
  };

  handleCleanData = () => {
    if (this.state.doc) {
      this.state.doc.map(homepageItem => {
        if (homepageItem.type === "home_page_header") {
          let images = [];
          homepageItem.data.home_page_header_slider_images.map(image => {
            images.push(image.home_page_header_slider_image.url);
          });
          this.setState({
            headerImageSlider: images,
            headerMainCopy:
              homepageItem.data.home_page_header_title_copy[0].text
          });
        }
      });
    }
  };

  handleAnchorLink = () => {
    window.removeEventListener("scroll", () => {
      setInterval(() => {
        window.requestAnimationFrame(this.handleParallax);
      }, 10);
    });
    document
      .querySelector("div.homepage__casestudies-featured")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  handleParallax = () => {
    document.querySelector("div.header").style.top = `${(
      window.pageYOffset * 0.4
    ).toString()}px`;
  };

  //LIFECYCLE----------------------------------

  componentDidMount() {
    this.getPrismicData();
    // if (!(window.innerWidth <= 1024)) {
    //   window.addEventListener("scroll", () => {
    //     setInterval(() => {
    //       window.requestAnimationFrame(this.handleParallax);
    //     }, 10);
    //   });
    // }
  }

  componentWillUnmount() {
    // if (!(window.innerWidth <= 1024)) {
    //   window.removeEventListener("scroll", () => {
    //     setInterval(() => {
    //       window.requestAnimationFrame(this.handleParallax);
    //     }, 10);
    //   });
    // }
  }

  // RENDER ---------------------------------------------

  render() {
    // console.log(this.props);
    return (
      <div>
        <div className="homepage__body">
          <Nav
            page="homepage"
            class="--home"
            logo="../../../assets/Rneil.svg"
          />
          <Header
            copy={this.state.headerMainCopy}
            galleryImages={this.state.headerImageSlider}
            handleAnchorLink={this.handleAnchorLink}
          />
          <div className="homepage__casestudies-featured">
            {this.props.renderCasestudies()}
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;

//    <h1 onClick={this.handleAnchorLink}>TO ABOUT</h1>

/*

  // renderCasestudies = () => {
  //   // console.log(this.props.casestudiesFeatured);
  //   if (this.props.casestudiesFeatured) {
  //     return (
  //       <div>
  //         {this.props.casestudiesFeatured.map(casestudy => {
  //           return (
  //             <Link
  //               to={`casestudy/${casestudy.slugs[0]}/${casestudy.id}`}
  //               key={casestudy.slugs[0]}
  //             >
  //               <Casestudy_Featured
  //                 title={casestudy.data.casestudy_title[0].text}
  //                 hero={casestudy.data.casestudy_hero_image.url}
  //                 heroMobile={casestudy.data.casestudy_hero_image_mobile.url}
  //               />
  //             </Link>
  //           );
  //         })}
  //       </div>
  //     );
  //   }
  // };

handleExhibitionsLink = () => {
    if (/exhibitions$/.test(window.location)) {
      console.log("exhibitions!");
      this.handleAnchorLink();
    }
  };

  // handleAnchorLink = () => {
  //   document
  //     .getElementById("exhibitions")
  //     .scrollIntoView({ behavior: "smooth", block: "start" });
  // };

else if (homepageItem.type === "casestudy") {
          let casestudy = {};
          casestudy.title = homepageItem.data.casestudy_title[0].text;
          casestudy.hero = homepageItem.data.casestudy_hero_image.url;
          casestudy.heroMobile =
            homepageItem.data.casestudy_hero_image_mobile.url;
          casestudy.slug = homepageItem.slugs[0];
          casestudy.id = homepageItem.id;
          featuredCasestudies.push(casestudy);
        }
      });

      this.setState({
        featuredCasestudies
      });

 if (this.state.featuredCasestudies) {
      return (
        <div>
          {this.state.featuredCasestudies.map(casestudy => {
            return (
              <Link
                to={`casestudy/${casestudy.slug}/${casestudy.id}`}
                key={casestudy.slug}
              >
                <Casestudy_Featured
                  title={casestudy.title}
                  hero={casestudy.hero}
                  heroMobile={casestudy.heroMobile}
                />
              </Link>
            );
          })}
        </div>
      );
    }

  getPrismicData = () => {
    const { token, apiEndpoint } = this.props;
    Prismic.api(apiEndpoint, { accessToken: token }).then(api => {
      api
        .query(
          Prismic.Predicates.any("document.type", [
            "home_page_header",
            "casestudy"
          ])
        )
        .then(response => {
          if (response) {
            this.setState({
              doc: response.results
            });
            console.log(this.state.doc);
            this.handleCleanData();
          }
        })
        .catch(error => console.log(error));
    });
  };
  */

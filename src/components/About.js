import React from "react";
import Prismic from "prismic-javascript";
import Nav from "./Nav";

class About extends React.Component {
  state = {
    doc: null
  };
  //FUNCS------------------------------------------
  getPrismicData = () => {
    const { apiEndpoint } = this.props;
    Prismic.api(apiEndpoint, {
      accessToken: process.env.REACT_APP_ACCESS_TOKEN
    }).then(api => {
      api
        .query(Prismic.Predicates.at("document.type", "about_page"), {
          fetch: ["about_page.about_page_copy", "about_page.about_page_image"]
        })
        .then(response => {
          if (response) {
            this.setState({
              doc: response.results
            });
            // console.log(this.state);
            this.cleanData();
          }
        })
        .catch(error => console.log(error));
    });
  };
  cleanData = () => {
    if (this.state.doc) {
      this.setState({
        aboutPageCopy: this.state.doc[0].data.about_page_copy[0].text,
        aboutPageImage: this.state.doc[0].data.about_page_image.url
      });
    }
  };
  checkForImage = () => {
    if (this.state.aboutPageImage) {
      return (
        <div>
          <img src={this.state.aboutPageImage} />
        </div>
      );
    }
  };
  //LIFECYCLE-----------------------------------------
  componentDidMount() {
    this.getPrismicData();
  }
  //RENDER--------------------------------------------
  render() {
    return (
      <div>
        <Nav class="--light-mode" color="#000" page="about" />
        <h2>{this.state.aboutPageCopy}</h2>
        {this.checkForImage()}
      </div>
    );
  }
}

export default About;

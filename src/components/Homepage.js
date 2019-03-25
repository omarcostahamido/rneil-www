import React from "react";
import Nav from "./Nav";
import Header from "./Header";

class Homepage extends React.Component {
  state = {
    isLoading: true
  };
  handleAnchorLink = () => {
    document.removeEventListener("scroll", this.handleParallax);
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
    if (window.innerWidth >= 1024) {
      document.addEventListener("scroll", this.handleParallax);
    }
    window.setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 4000);
  }
  componentWillUnmount() {
    if (window.innerWidth >= 1024) {
      document.removeEventListener("scroll", this.handleParallax);
    }
  }
  // RENDER ---------------------------------------------
  render() {
    return (
      <div>
        <div
          className={`homepage__body ${
            this.props.isLoading ? "--isLoading" : null
          }`}
        >
          <Nav page="homepage" class="--home" />
          <Header
            copy={
              this.props.data
                ? this.props.data[0].data.home_page_header_title_copy[0].text
                : null
            }
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

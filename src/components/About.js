import React from "react";
import Prismic from "prismic-javascript";
import Nav from "./Nav";
import Video_Module_Slice from "./Slices/Video_Module_Slice";
import Image_Dyptich from "./Slices/Image_Dyptich";

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
          fetch: [
            "about_page.about_page_copy",
            "about_page.about_page_image",
            "about_page.about_page_main_copy",
            "about_page.about_page_image_2",
            "about_page.about_page_videos"
          ]
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
      let videos = [];
      this.state.doc[0].data.about_page_videos.forEach(video => {
        videos.push({
          url: video.about_page_video_url.url,
          title: video.video_title[0].text,
          year: video.video_year[0].text
        });
      });
      this.setState({
        aboutPageMainCopy: this.state.doc[0].data.about_page_main_copy[0].text,
        aboutPageCopy: this.state.doc[0].data.about_page_copy[0].text,
        aboutPageImages: [
          this.state.doc[0].data.about_page_image.url,
          this.state.doc[0].data.about_page_image_2.url
        ],
        aboutPageVideos: videos
      });
    }
    document.querySelector(".about__header").classList.remove("animate");
    document.querySelector(".about__header").classList.add("is--active");
  };
  renderVideos = () => {
    if (this.state.aboutPageVideos && this.state.aboutPageVideos.length > 0) {
      return (
        <div>
          {this.state.aboutPageVideos.map(video => {
            return (
              <div key={video.title}>
                <Video_Module_Slice mediaModuleUrl={video.url} />
                <div className="about-videos__info">
                  <p>{video.title}</p>
                  <p>{video.year}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };
  //LIFECYCLE-----------------------------------------
  componentDidMount() {
    this.getPrismicData();
    //HACK to fix weird scroll bug between Router Links
    if (window.pageYOffset > 0) {
      window.scrollTo(0, 0);
    }
  }

  componentDidUpdate() {
    //put code to make sure the animated elements stay visible between clicks here
  }
  //RENDER--------------------------------------------
  render() {
    return (
      <div>
        <Nav className="--light-mode" color="#000" page="about" />
        <div className="about__header animate">
          <h1 className="about__title">{this.state.aboutPageMainCopy}</h1>
          <div className="about__copy">
            <a href="mailto:hello@r-neil.com">email for inquiries</a>
            <p>{this.state.aboutPageCopy}</p>
          </div>
        </div>
        <div className="dyptich--wrapper animate">
          <Image_Dyptich dyptichUrls={this.state.aboutPageImages} />
        </div>
        {this.state.aboutPageVideos && this.renderVideos()}
      </div>
    );
  }
}

export default About;

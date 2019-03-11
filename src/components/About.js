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
        videos.push(video.about_page_video_url.url);
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
  };
  renderVideos = () => {
    if (this.state.aboutPageVideos && this.state.aboutPageVideos.length > 0) {
      return (
        <div>
          {this.state.aboutPageVideos.map(video => {
            return <Video_Module_Slice mediaModuleUrl={video} key={video} />;
          })}
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
        <h1>{this.state.aboutPageMainCopy}</h1>
        <button>inquire</button>
        <p>{this.state.aboutPageCopy}</p>
        <Image_Dyptich dyptichUrls={this.state.aboutPageImages} />

        {this.state.aboutPageVideos && this.renderVideos()}
      </div>
    );
  }
}

export default About;

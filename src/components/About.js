import React from "react";
import Nav from "./Nav";
import Video_Module_Slice from "./Slices/Video_Module_Slice";
import Image_Dyptich from "./Slices/Image_Dyptich";

const About = props => {
  const renderVideos = props => {
    if (props.data[0].data.about_page_videos.length >= 1) {
      return (
        <div>
          {props.data[0].data.about_page_videos.map(video => {
            return (
              <div key={video.video_title[0].text}>
                <Video_Module_Slice
                  mediaModuleUrl={video.about_page_video_url.url}
                />
                <div className="about-videos__info">
                  <p>{video.video_title[0].text}</p>
                  <p>{video.video_year[0].text}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };
  props.scrollTop();
  return (
    <div>
      <Nav className="--light-mode" color="#000" page="about" />
      <div className={`about__header ${props.data ? "is--active" : "animate"}`}>
        <h1 className="about__title">
          {props.data ? props.data[0].data.about_page_main_copy[0].text : null}
        </h1>
        <div className="about__copy">
          <a href="mailto:hello@r-neil.com">email for inquiries</a>
          <p>
            {props.data ? props.data[0].data.about_page_copy[0].text : null}
          </p>
        </div>
      </div>
      <div className="dyptich--wrapper animate">
        <Image_Dyptich
          dyptichUrls={
            props.data
              ? [
                  props.data[0].data.about_page_image.url,
                  props.data[0].data.about_page_image_2.url
                ]
              : null
          }
        />
        {props.data && renderVideos(props)}
      </div>
    </div>
  );
};

export default About;

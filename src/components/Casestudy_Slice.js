import React from "react";
import Body_Text_Slice from "./Slices/Body_Text_Slice";
import Image_Slice from "./Slices/Image_Slice";
import Pull_Quote_Slice from "./Slices/Pull_Quote_Slice";
import Autoplay_Video_Module from "./Slices/Autoplay_Video_Module";
import Video_Module_Slice from "./Slices/Video_Module_Slice";
import Audio_Module_Slice from "./Slices/Audio_Module_Slice";
import Panoramic_Slider_Slice from "./Slices/Panoramic_Slider_Slice";
import Image_Dyptich from "./Slices/Image_Dyptich";
import Gallery from "./Slices/Gallery";
import Text_Dyptich from "./Slices/Text_Dyptich";

const Casestudy_Slice = props => {
  //for the gallery & pano slider scroll bx
  function handleImageClick(e) {
    console.log(e.target.id)
    if (window.innerWidth >= 1280) {
      document.getElementById(e.target.id.toString()).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: /^slice/.test(e.target.classList[0]) ? "end" : "center"
      });
    }
  }
  function renderSlice(props) {
    if (props.slice_doc) {
      if (props.slice_type === "body_text") {
        return (
          <Body_Text_Slice
            id={props.id}
            bodyCopy={props.slice_doc.primary.body_copy_rich_text}
            position={props.slice_doc.primary.position}
            handleFadeIn={props.handleFadeIn}
            handleFadeOut={props.handleFadeOut}
          />
        );
      } else if (props.slice_type === "pull_quote") {
        return (
          <Pull_Quote_Slice
            id={props.id}
            pullQuoteCopy={
              props.slice_doc.primary.pull_quote_copy[0]
                ? props.slice_doc.primary.pull_quote_copy[0].text
                : null
            }
            handleFadeIn={props.handleFadeIn}
            handleFadeOut={props.handleFadeOut}
          />
        );
      } else if (props.slice_type === "text_dyptich") {
        return (
          <Text_Dyptich
            id={props.id}
            pullQuote={
              props.slice_doc.primary.dyptich_pull_quote[0].text
                ? props.slice_doc.primary.dyptich_pull_quote[0].text
                : null
            }
            bodyCopy={
              props.slice_doc.primary.dyptich_body_copy[0].text
                ? props.slice_doc.primary.dyptich_body_copy[0].text
                : null
            }
            handleFadeIn={props.handleFadeIn}
            handleFadeOut={props.handleFadeOut}
          />
        );
      } else if (props.slice_type === "image") {
        return (
          <Image_Slice
            id={props.id}
            style={props.slice_doc.primary.style}
            isMobile={props.isMobile}
            desktopUrl={
              props.slice_doc.primary.casestudy_image.url
                ? props.slice_doc.primary.casestudy_image.url
                : null
            }
            mobileUrl={
              props.isMobile &&
              props.slice_doc.primary.casestudy_image_mobile.url
                ? props.slice_doc.primary.casestudy_image_mobile.url
                : null
            }
            handleFadeIn={props.handleFadeIn}
            handleFadeOut={props.handleFadeOut}
          />
        );
      } else if (props.slice_type === "image_dyptich") {
        return (
          <div className="dyptich--wrapper">
            <Image_Dyptich
              id={props.id}
              isMobile={props.isMobile}
              mobileUrls={
                props.slice_doc.primary.dyptich_image_1_mobile.url
                  ? [
                      props.slice_doc.primary.dyptich_image_1_mobile.url,
                      props.slice_doc.primary.dyptich_image_2_mobile.url
                    ]
                  : null
              }
              desktopUrls={
                props.slice_doc.primary.dyptich_image_1.url
                  ? [
                      props.slice_doc.primary.dyptich_image_1.url,
                      props.slice_doc.primary.dyptich_image_2.url
                    ]
                  : null
              }
              handleFadeIn={props.handleFadeIn}
              handleFadeOut={props.handleFadeOut}
            />
          </div>
        );
      } else if (props.slice_type === "panoramic_slider") {
        return (
          <Panoramic_Slider_Slice
            id={props.id}
            handleImageClick={handleImageClick}
            isMobile={props.isMobile}
            desktopUrl={
              props.slice_doc.primary.panoramic_slider_image.url
                ? props.slice_doc.primary.panoramic_slider_image.url
                : null
            }
            mobileUrl={
              props.isMobile &&
              props.slice_doc.primary.panoramic_slider_image_mobile.url
                ? props.slice_doc.primary.panoramic_slider_image_mobile.url
                : null
            }
            handleFadeIn={props.handleFadeIn}
            handleFadeOut={props.handleFadeOut}
          />
        );
      } else if (props.slice_type === "image_slider") {
        let mobileImages = [];
        let desktopImages = [];
        if (props.slice_doc.items.length > 1) {
          props.slice_doc.items.map(image => {
            mobileImages.push(image.image_slider_images_mobile.url);
            desktopImages.push(image.image_slider_images.url);
          });
        }
        return (
          <Gallery
            id={props.id}
            isMobile={props.isMobile}
            handleImageClick={handleImageClick}
            mobileImages={mobileImages}
            desktopImages={desktopImages}
            type="slice-slider"
            handleFadeIn={props.handleFadeIn}
            handleFadeOut={props.handleFadeOut}
          />
        );
      } else if (props.slice_type === "autoplay_video_module") {
        return (
          <Autoplay_Video_Module
            id={props.id}
            autoplayVideoUrl={
              props.isMobile &&
              props.slice_doc.primary.autoplay_video_url_mobile.url
                ? props.slice_doc.primary.autoplay_video_url_mobile.url
                : props.slice_doc.primary.autoplay_video_url.url
            }
            style={props.slice_doc.primary.style}
            handleFadeIn={props.handleFadeIn}
            handleFadeOut={props.handleFadeOut}
          />
        );
      } else if (props.slice_type === "video_module") {
        return (
          <Video_Module_Slice
            id={props.id}
            mediaModuleUrl={
              props.slice_doc.primary.video_module_embed.embed_url
                ? props.slice_doc.primary.video_module_embed.embed_url
                : null
            }
            style={props.slice_doc.primary.style}
            handleFadeIn={props.handleFadeIn}
            handleFadeOut={props.handleFadeOut}
          />
        );
      } else if (props.slice_type === "audio_module") {
        return (
          <Audio_Module_Slice
            id={props.id}
            mediaModuleUrl={
              props.slice_doc.primary.audio_module_embed.embed_url
                ? props.slice_doc.primary.audio_module_embed.embed_url
                : null
            }
            otherAudioUrl={
              props.slice_doc.primary.audio_module_url.url
                ? props.slice_doc.primary.audio_module_url.url
                : null
            }
            handleFadeIn={props.handleFadeIn}
            handleFadeOut={props.handleFadeOut}
            isSoundcloud={
              props.slice_doc.primary.embed_type == "is--other" ? false : true
            }
          />
        );
      }
    }
  }
  return <div>{renderSlice(props)}</div>;
};

export default Casestudy_Slice;

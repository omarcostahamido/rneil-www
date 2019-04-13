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
  const handleImageClick = () => {
    let scrollX = 0;
    let eventX = 0;
    return function handleScroll(e) {
      if (window.innerWidth > 1024) {
        //to accommodate safari & edge not understanding scrollIntoView option obj
        if (
          /^Apple/.test(navigator.vendor) ||
          /^Microsoft/.test(navigator.vendor)
        ) {
          if (/^slice/.test(e.target.classList[0])) {
            if (eventX < e.pageX) {
              scrollX += e.target.getBoundingClientRect().width / 3;
            } else {
              scrollX -= e.target.getBoundingClientRect().width / 3;
            }
          } else {
            if (
              e.pageX / 3 + e.target.getBoundingClientRect().width >
              scrollX
            ) {
              scrollX += e.pageX / 3 + e.target.getBoundingClientRect().width;
            } else {
              scrollX -= e.target.getBoundingClientRect().width;
            }
          }
          eventX = e.pageX;
          if (e.target.classList.contains("slice-pano__img")) {
            document
              .getElementById(e.target.parentNode.parentNode.id)
              .scrollTo(scrollX, 0);
          } else if (e.target.classList.contains("gallery__images")) {
            document
              .getElementById(e.target.parentNode.id)
              .scrollTo(scrollX, 0);
          }
        } else {
          document.getElementById(e.target.id.toString()).scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: /^slice/.test(e.target.classList[0]) ? "end" : "center"
          });
        }
      }
    };
  };
  const renderSlice = props => {
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
            position={props.slice_doc.primary.position}
            handleFadeIn={props.handleFadeIn}
            handleFadeOut={props.handleFadeOut}
          />
        );
      } else if (props.slice_type === "text_dyptich") {
        return (
          <Text_Dyptich
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
          />
        );
      } else if (props.slice_type === "image") {
        return (
          <Image_Slice
            id={props.id}
            style={props.slice_doc.primary.style}
            singleImageUrl={
              props.isMobile &&
              props.slice_doc.primary.casestudy_image_mobile.url
                ? props.slice_doc.primary.casestudy_image_mobile.url
                : props.slice_doc.primary.casestudy_image.url
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
              dyptichUrls={
                props.isMobile &&
                props.slice_doc.primary.dyptich_image_1_mobile.url
                  ? [
                      props.slice_doc.primary.dyptich_image_1_mobile.url,
                      props.slice_doc.primary.dyptich_image_2_mobile.url
                    ]
                  : [
                      props.slice_doc.primary.dyptich_image_1.url,
                      props.slice_doc.primary.dyptich_image_2.url
                    ]
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
            panoramicImageUrl={
              props.isMobile &&
              props.slice_doc.primary.panoramic_slider_image_mobile.url
                ? props.slice_doc.primary.panoramic_slider_image_mobile.url
                : props.slice_doc.primary.panoramic_slider_image.url
            }
            handleFadeIn={props.handleFadeIn}
            handleFadeOut={props.handleFadeOut}
          />
        );
      } else if (props.slice_type === "image_slider") {
        let sliderImages = [];
        if (props.slice_doc.items.length > 1) {
          props.slice_doc.items.map(image => {
            if (props.isMobile && image.image_slider_images_mobile.url) {
              sliderImages.push(image.image_slider_images_mobile.url);
            } else {
              sliderImages.push(image.image_slider_images.url);
            }
          });
        }
        return (
          <Gallery
            id={props.id}
            handleImageClick={handleImageClick}
            galleryImages={sliderImages}
            type="slice-slider"
            pullQuote={
              props.slice_doc.primary.image_slider_pull_quote[0]
                ? props.slice_doc.primary.image_slider_pull_quote[0].text
                : null
            }
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
            handleFadeIn={props.handleFadeIn}
            handleFadeOut={props.handleFadeOut}
          />
        );
      }
    }
  };
  return <div>{renderSlice(props)}</div>;
};

export default Casestudy_Slice;

import React from "react";
import Body_Text_Slice from "./Slices/Body_Text_Slice";
import Image_Slice from "./Slices/Image_Slice";
import Pull_Quote_Slice from "./Slices/Pull_Quote_Slice";
import Image_Left_Right_Slice from "./Slices/Image_Left_Right_Slice";
import Autoplay_Video_Module from "./Slices/Autoplay_Video_Module";
import Video_Module_Slice from "./Slices/Video_Module_Slice";
import Audio_Module_Slice from "./Slices/Audio_Module_Slice";
import { navigate } from "@reach/router";
import Panoramic_Slider_Slice from "./Slices/Panoramic_Slider_Slice";
import Slider_Slice from "./Slices/Slider_Slice";

class Casestudy_Slice extends React.Component {
  state = {
    doc: this.props.slice_doc,
    type: this.props.slice_type,
    sliderImages: []
  };

  //set the state as per component data needs

  cleanData = () => {
    if (this.state.doc) {
      if (this.state.type === "body_text") {
        this.setState({
          bodyCopy: this.state.doc.primary.body_copy_rich_text[0].text
        });
      } else if (this.props.slice_type === "image") {
        this.setState({
          singleImageUrl: this.state.doc.primary.casestudy_image.url,
          singleImageUrlMobile: this.state.doc.primary.casestudy_image_mobile
            .url
        });
      } else if (this.props.slice_type === "pull_quote") {
        this.setState({
          pullQuoteCopy: this.state.doc.primary.pull_quote_copy[0].text
        });
      } else if (this.props.slice_type === "image_left") {
        this.setState({
          imageLeftRightUrl: this.state.doc.primary.image_left_image.url,
          imageLeftRightUrlMobile: this.state.doc.primary
            .image_left_image_mobile.url,
          imageLeftRightCopy: this.state.doc.primary.image_left_copy[0],
          orientation: this.state.doc.primary.left_or_right
        });
      } else if (this.props.slice_type === "panoramic_slider") {
        this.setState({
          panoramicImageUrl: this.state.doc.primary.panoramic_slider_image.url,
          panoramicImageUrlMobile: this.state.doc.primary
            .panoramic_slider_image_mobile.url
        });
      } else if (this.props.slice_type === "image_slider") {
        //The Mobile Conditional is here for this slider!
        let sliderImages = [];
        this.state.doc.items.map(image => {
          if (this.props.isMobile && image.image_slider_images_mobile) {
            sliderImages.push(image.image_slider_images_mobile.url);
          } else {
            sliderImages.push(image.image_slider_images.url);
          }
        });
        this.setState({
          sliderImages,
          sliderPullQuote: this.state.doc.primary.image_slider_pull_quote[0]
            .text
        });
      } else if (this.props.slice_type === "autoplay_video_module") {
        this.setState({
          autoplayVideoUrl: this.state.doc.primary.autoplay_video_url.url,
          autoplayVideoUrlMobile:
            this.state.doc.primary.autoplay_video_url_mobile &&
            this.state.doc.primary.autoplay_video_url_mobile.url
        });
      } else if (this.props.slice_type === "video_module") {
        this.setState({
          mediaModuleUrl: this.state.doc.primary.video_module_embed.embed_url
        });
      } else if (this.props.slice_type === "audio_module") {
        this.setState({
          mediaModuleUrl: this.state.doc.primary.audio_module_embed.embed_url
        });
      }
    } else {
      console.log("error- no doc found");
      this.navigateHome();
    }
  };

  /*
  handle the styling and class assignments at indiv component level
  pass down any slice data in renderSlice via props 

  add mobile conditionals here to what gets passed down to the slice
  in terms of mobile versus desktop assets  
  */

  renderSlice = () => {
    if (this.props.slice_type === "body_text") {
      return <Body_Text_Slice bodyCopy={this.state.bodyCopy} />;
    } else if (this.props.slice_type === "pull_quote") {
      return <Pull_Quote_Slice pullQuoteCopy={this.state.pullQuoteCopy} />;
    } else if (this.props.slice_type === "image") {
      return (
        <Image_Slice
          singleImageUrl={
            this.props.isMobile && this.state.singleImageUrlMobile
              ? this.state.singleImageUrlMobile
              : this.state.singleImageUrl
          }
        />
      );
    } else if (this.props.slice_type === "image_left") {
      return (
        <Image_Left_Right_Slice
          imageLeftRightUrl={
            this.props.isMobile && this.state.imageLeftRightUrlMobile
              ? this.state.imageLeftRightUrlMobile
              : this.state.imageLeftRightUrl
          }
          imageLeftRightCopy={this.state.imageLeftRightCopy}
          orientation={this.state.orientation}
        />
      );
    } else if (this.props.slice_type === "panoramic_slider") {
      return (
        <Panoramic_Slider_Slice
          panoramicImageUrl={
            this.props.isMobile && this.state.panoramicImageUrlMobile
              ? this.state.panoramicImageUrlMobile
              : this.state.panoramicImageUrl
          }
        />
      );
    } else if (this.props.slice_type === "image_slider") {
      return (
        <Slider_Slice
          //mobile conditionals handled in cleanData ^^
          sliderImages={this.state.sliderImages}
          sliderPullQuote={this.state.sliderPullQuote}
        />
      );
    } else if (this.props.slice_type === "autoplay_video_module") {
      return (
        <Autoplay_Video_Module
          autoplayVideoUrl={
            this.props.isMobile && this.state.autoplayVideoUrlMobile
              ? this.state.autoplayVideoUrlMobile
              : this.state.autoplayVideoUrl
          }
        />
      );
    } else if (this.props.slice_type === "video_module") {
      return <Video_Module_Slice mediaModuleUrl={this.state.mediaModuleUrl} />;
    } else if (this.props.slice_type === "audio_module") {
      return <Audio_Module_Slice mediaModuleUrl={this.state.mediaModuleUrl} />;
    }
  };

  navigateHome = () => {
    navigate("/");
  };

  //LIFECYCLE-------------------------------------------------------

  componentDidMount() {
    this.cleanData();
  }

  //RENDER-----------------------------------------------------------

  render() {
    // console.log(this.state);
    return <div>{this.renderSlice()}</div>;
  }
}

export default Casestudy_Slice;

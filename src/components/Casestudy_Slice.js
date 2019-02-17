import React from "react";
import Body_Text_Slice from "./Slices/Body_Text_Slice";
import Image_Slice from "./Slices/Image_Slice";
import Pull_Quote_Slice from "./Slices/Pull_Quote_Slice";
import Image_Left_Right_Slice from "./Slices/Image_Left_Right_Slice";
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
      // console.log("doc true!");
      if (this.state.type === "body_text") {
        this.setState({
          bodyCopy: this.state.doc.primary.body_copy_rich_text[0].text
        });
      } else if (this.props.slice_type === "image") {
        this.setState({
          singleImageUrl: this.state.doc.primary.casestudy_image.url
        });
      } else if (this.props.slice_type === "pull_quote") {
        this.setState({
          pullQuoteCopy: this.state.doc.primary.pull_quote_copy[0].text
        });
      } else if (this.props.slice_type === "image_left") {
        this.setState({
          imageLeftRightUrl: this.state.doc.primary.image_left_image.url,
          imageLeftRightCopy: this.state.doc.primary.image_left_copy[0],
          orientation: this.state.doc.primary.left_or_right
        });
      } else if (this.props.slice_type === "panoramic_slider") {
        this.setState({
          panoramicImageUrl: this.state.doc.primary.panoramic_slider_image.url
        });
      } else if (this.props.slice_type === "image_slider") {
        console.log(this.state.doc);
        let sliderImages = [];

        this.state.doc.items.map(image => {
          sliderImages.push(image.image_slider_images.url);
        });
        this.setState({
          sliderImages: sliderImages,
          sliderPullQuote: this.state.doc.primary.image_slider_pull_quote[0]
            .text
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
      // this.navigateHome();
    }
  };

  /*
  handle the styling and class assignments at indiv component level
  pass down any slice data in renderSlice via props 
  */

  renderSlice = () => {
    if (this.props.slice_type === "body_text") {
      return <Body_Text_Slice bodyCopy={this.state.bodyCopy} />;
    } else if (this.props.slice_type === "pull_quote") {
      return <Pull_Quote_Slice pullQuoteCopy={this.state.pullQuoteCopy} />;
    } else if (this.props.slice_type === "image") {
      return <Image_Slice singleImageUrl={this.state.singleImageUrl} />;
    } else if (this.props.slice_type === "image_left") {
      return (
        <Image_Left_Right_Slice
          imageLeftRightUrl={this.state.imageLeftRightUrl}
          imageLeftRightCopy={this.state.imageLeftRightCopy}
          orientation={this.state.orientation}
        />
      );
    } else if (this.props.slice_type === "panoramic_slider") {
      return (
        <Panoramic_Slider_Slice
          panoramicImageUrl={this.state.panoramicImageUrl}
        />
      );
    } else if (this.props.slice_type === "image_slider") {
      return (
        <Slider_Slice
          sliderImages={this.state.sliderImages}
          sliderPullQuote={this.state.sliderPullQuote}
        />
      );
    } else if (this.props.slice_type === "video_module") {
      return <Video_Module_Slice mediaModuleUrl={this.state.mediaModuleUrl} />;
    } else if (this.props.slice_type === "audio_module") {
      return <Audio_Module_Slice mediaModuleUrl={this.state.mediaModuleUrl} />;
    } else {
      // return <div>{this.navigateHome()}</div>;
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

import React from "react";
import ReactPlayer from "react-player";
import { black } from "ansi-colors";

class Casestudy_Slice extends React.Component {
  state = {
    doc: this.props.slice_doc,
    type: this.props.slice_type
  };

  cleanData = () => {
    if (this.state.doc) {
      console.log("doc true!");
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
          pullquoteCopy: this.state.doc.primary.pull_quote_copy[0].text
        });
      } else if (this.props.slice_type === "image_left") {
        this.setState({ imageLeftUrl: this.state.primary.image_left.url });
      } else if (this.props.slice_type === "video_module") {
        this.setState({
          mediaModuleUrl: this.state.doc.primary.video_module_embed.embed_url,
          videoModuleHtml: this.state.doc.primary.video_module_embed.html,
          videoModuleAppId: this.state.doc.primary.video_module_embed.video_id
        });
      } else if (this.props.slice_type === "audio_module") {
        this.setState({
          mediaModuleUrl: this.state.doc.primary.audio_module_embed.embed_url
        });
      }
    } else {
      console.log("no doc from props!");
    }
  };

  /*add additional logic here looking for a tag or something
      to differentiate the different styels. add various classes 
      or set classes in state above when cleaning data */

  renderSlice = () => {
    if (this.props.slice_type === "body_text") {
      return <p>{this.state.bodyCopy}</p>;
    } else if (this.props.slice_type === "pull_quote") {
      return <h1>{this.state.pullquoteCopy}</h1>;
    } else if (this.props.slice_type === "image") {
      return <img src={this.state.singleImageUrl} />;
    } else if (this.props.slice_type === "image_left") {
      return <img src={this.state.imageLeftUrl} />;
    } else if (
      this.props.slice_type === "video_module" ||
      this.props.slice_type === "audio_module"
    ) {
      return (
        <ReactPlayer
          height={this.props.slice_type === "audio_module" ? 150 : 360}
          url={this.state.mediaModuleUrl}
          config={{
            vimeo: {
              playerOptions: {
                byline: false,
                color: black
              }
            },
            soundcloud: {
              options: {
                visual: false,
                color: black,
                show_artwork: false
              }
            }
          }}
        />
      );
    } else {
      return <div>{this.props.slice_type}</div>;
    }
  };

  componentDidMount() {
    this.cleanData();
  }

  render() {
    console.log(this.state);
    return <div>{this.renderSlice()}</div>;
  }
}

export default Casestudy_Slice;

/*
other slice conditionals left to do

 else if (this.props.slice_type === "audio_module") {
      } else if (this.props.slice_type === "panoramic_slider") {
      } else if (this.props.slice_type === "slider") {
      } else if (this.props.slice_type === "image_right") {
      } else if (this.props.slice_type === "image_slider_w_pull_quote") {
      } 
*/

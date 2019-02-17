import React from "react";
import ReactPlayer from "react-player";

class Video_Module_Slice extends React.Component {
  render() {
    return (
      <ReactPlayer
        height={this.props.slice_type === "audio_module" ? 150 : 360}
        url={this.props.mediaModuleUrl}
        config={{
          vimeo: {
            playerOptions: {
              byline: false
            }
          }
        }}
      />
    );
  }
}

export default Video_Module_Slice;

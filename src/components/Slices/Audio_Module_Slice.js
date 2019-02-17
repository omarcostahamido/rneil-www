import React from "react";
import ReactPlayer from "react-player";

class Audio_Module_Slice extends React.Component {
  render() {
    return (
      <ReactPlayer
        height={150}
        url={this.props.mediaModuleUrl}
        config={{
          soundcloud: {
            options: {
              visual: false,
              show_artwork: false
            }
          }
        }}
      />
    );
  }
}

export default Audio_Module_Slice;

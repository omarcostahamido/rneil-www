import React from "react";

class Autoplay_Video_Module extends React.Component {
  render() {
    return (
      <div>
        <video autoPlay loop muted>
          <source src={this.props.autoplayVideoUrl} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Autoplay_Video_Module;

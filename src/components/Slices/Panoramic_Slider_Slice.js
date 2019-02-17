import React from "react";

class Panoramic_Slider_Slice extends React.Component {
  render() {
    return (
      <div>
        <p>Slide</p>
        <img src={this.props.panoramicImageUrl} />
      </div>
    );
  }
}

export default Panoramic_Slider_Slice;

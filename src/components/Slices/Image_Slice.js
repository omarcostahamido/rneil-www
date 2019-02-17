import React from "react";

class Image_Slice extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.singleImageUrl} />
      </div>
    );
  }
}

export default Image_Slice;

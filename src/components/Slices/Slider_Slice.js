import React from "react";

/* 
will need to handle multiple images here 
- get all images from props and add
styles
*/

class Slider_Slice extends React.Component {
  checkForPullQuote = () => {
    if (this.props.sliderPullQuote) {
      return <h1>{this.props.sliderPullQuote}</h1>;
    }
  };

  renderImages = () => {
    if (this.props.sliderImages) {
      return (
        <div>
          {this.props.sliderImages.map(imageUrl => {
            // console.log("render image!");
            return <img key={imageUrl} src={imageUrl} />;
          })}
          {this.checkForPullQuote()}
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderImages()}</div>;
  }
}

export default Slider_Slice;

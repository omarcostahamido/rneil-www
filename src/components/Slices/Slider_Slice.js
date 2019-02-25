import React from "react";
import Gallery from "./Gallery";

const Slider_Slice = props => {
  return (
    <div>
      <Gallery type="casestudySlider" galleryImages={props.sliderImages} />
      {props.sliderPullQuote && (
        <h1 className="slice__slider-pullquote">{props.sliderPullQuote}</h1>
      )}
    </div>
  );
};

export default Slider_Slice;

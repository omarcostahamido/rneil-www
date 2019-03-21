import React from "react";

const Panoramic_Slider_Slice = props => {
  const handleImageClick = e => {
    let scrollX = 0;
    let eventX = 0;
    return function handleScroll(e) {
      if (window.innerWidth > 768) {
        //to accommodate safari & edge not understanding scrollIntoView option obj
        if (
          /^Apple/.test(navigator.vendor) ||
          /^Microsoft/.test(navigator.vendor)
        ) {
          console.log("safari");
          console.log(e.pageX);
          if (eventX < e.pageX) {
            scrollX += e.target.getBoundingClientRect().width / 3;
          } else {
            scrollX -= e.target.getBoundingClientRect().width / 3;
          }
          eventX = e.pageX;
          document.querySelector(".slice-pano--wrap").scrollTo(scrollX, 0);
        } else {
          document
            .querySelector(`.${e.target.className.toString()}`)
            .scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "end"
            });
        }
      }
    };
  };
  //closure for scrollX & eventX
  const handleScroll = handleImageClick();
  return (
    <div id="pano" className="slice-pano" onClick={handleScroll}>
      <div className="slice-pano--wrap">
        <div className="slice-pano--padding" />
        <p>swipe</p>
        <img className="slice-pano__img" src={props.panoramicImageUrl} />
      </div>
    </div>
  );
};

export default Panoramic_Slider_Slice;

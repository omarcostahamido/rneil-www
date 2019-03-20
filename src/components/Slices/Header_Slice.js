import React from "react";
import Autoplay_Video_Module from "./Autoplay_Video_Module";

const Header_Slice = props => {
  //add conditional to the style of the header whether it's a vid??
  //or just pull autoplay vid slice with extra parameters??
  // console.log(props);

  // <Autoplay_Video_Module
  //         autoplayVideoUrl={props.casestudyHeroVideo}
  //         style="autoplay-hero"
  //       />
  return (
    <div>
      <div
        className="casestudy__header"
        style={
          !props.isVideo
            ? {
                backgroundColor: "inherit",
                backgroundImage: `url(${props.casestudyHero})`,
                WebkitBackgroundSize: "cover",
                MozBackgroundSize: "cover",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }
            : { backgroundColor: "transparent" }
        }
      >
        {props.isVideo ? (
          <Autoplay_Video_Module
            autoplayVideoUrl={props.casestudyHeroVideo}
            style="autoplay-hero"
          />
        ) : null}
        <div
          className="header--info"
          style={props.isVideo ? { position: "absolute", zIndex: "2" } : null}
        >
          <h1 className={props.titleCopyColor ? props.titleCopyColor : null}>
            {props.titleCopy}
          </h1>
          <svg width="13px" height="15px" viewBox="0 0 13 15">
            <g
              stroke={
                props.titleCopyColor && props.titleCopyColor === "black"
                  ? "#000"
                  : "#FFF"
              }
            >
              <path
                d="M12.5,7.05882353 L6.5,14.1176471 L0.5,7.05882353 M6.5,14.1176471 L6.5,0.882352941 L6.5,14.1176471"
                fill="transparent"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header_Slice;

/**
 *
 * return (
    <div>
      <div
        className="casestudy__header"
        style={{
          backgroundColor: "inherit",
          backgroundImage: `url(${props.casestudyHero})`,
          WebkitBackgroundSize: "cover",
          MozBackgroundSize: "cover",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        <div className="header--info">
          <h1 className={props.titleCopyColor ? props.titleCopyColor : null}>
            {props.titleCopy}
          </h1>
          <svg width="13px" height="15px" viewBox="0 0 13 15">
            <g
              stroke={
                props.titleCopyColor && props.titleCopyColor === "black"
                  ? "#000"
                  : "#FFF"
              }
            >
              <path
                d="M12.5,7.05882353 L6.5,14.1176471 L0.5,7.05882353 M6.5,14.1176471 L6.5,0.882352941 L6.5,14.1176471"
                fill="transparent"
              />
            </g>
          </svg>
        </div>
      </div>
      <Autoplay_Video_Module
        autoplayVideoUrl={props.casestudyHeroVideo}
        style="media--fullwidth"
      />
    </div>
 *
 *
 */

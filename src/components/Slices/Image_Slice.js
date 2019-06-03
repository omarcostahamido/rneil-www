import React from "react";
import { Waypoint } from "react-waypoint";

//can add additional css for positioning when needed - [left, right, center]
const Image_Slice = props => {
  const fadeIn = props.handleFadeIn(props.id);
  const fadeOut = props.handleFadeOut(props.id);
  // const [src, setSrc] = useState(props.desktopUrl);
  // function handleImageResize() {
  //   if (
  //     window.innerWidth < 1024 ||
  //     document.documentElement.clientWidth < 1024
  //   ) {
  //     console.log("mobile");
  //     props.mobileUrl !== null && setSrc(props.mobileUrl);
  //   } else {
  //     console.log("desktop");
  //     props.desktopUrl !== null && setSrc(props.desktopUrl);
  //   }

  //   // window.innerWidth < 1024 || document.documentElement.clientWidth < 1024
  //   //   ? setSrc(props.mobileUrl)
  //   //   : setSrc(props.desktopUrl);
  // }
  // useEffect(() => {
  //   handleImageResize();
  //   window.addEventListener("resize", handleImageResize);
  //   return function() {
  //     window.removeEventListener("resize", handleImageResize);
  //   };
  // }, []);
  return (
    <div
      className={`media ${
        props.style ? props.style.toString() : "media--wide"
      }`}
    >
      <Waypoint onEnter={fadeIn} onLeave={fadeOut}>
        <img
          id={props.id}
          src={
            props.isMobile && props.mobileUrl !== null
              ? props.mobileUrl
              : props.desktopUrl
          }
          className="animate"
        />
      </Waypoint>
    </div>
  );
};

export default Image_Slice;

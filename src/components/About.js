import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Pull_Quote_Slice from "./Slices/Pull_Quote_Slice";
import Image_Dyptich from "./Slices/Image_Dyptich";
import Body_Text_Slice from "./Slices/Body_Text_Slice";
import Video_Module_Slice from "./Slices/Video_Module_Slice";

const About = props => {
  const renderVideos = props => {
    if (props.data[0].data.about_page_videos.length >= 1) {
      return (
        <div>
          {props.data[0].data.about_page_videos.map(video => {
            return (
              <div key={`${props.data[0].id}-${video.video_title[0].text}`}>
                <Video_Module_Slice
                  id={`${props.data[0].id}-${video.video_title[0].text}`}
                  mediaModuleUrl={video.about_page_video_url.url}
                  handleFadeIn={props.handleFadeIn}
                  handleFadeOut={props.handleFadeOut}
                  style="media--wide media--about"
                />
                <div className="about-videos__info">
                  <p>{video.video_title[0].text}</p>
                  <p>{video.video_year[0].text}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };
  //HOOKS----------------------------------------------
  let [isScroll, setScroll] = useState(true);
  useEffect(() => {
    if (isScroll) {
      setScroll((isScroll = false));
      props.scrollTop();
    }
  });
  //RENDER----------------------------------------------
  return (
    <main
      onScroll={() => {
        setScroll((isScroll = false));
      }}
      className="--isLoaded about"
    >
      <Nav className="--light-mode" color="#000" page="about" />
      <section className="about__header">
        <Pull_Quote_Slice
          id="about-pull-quote"
          pullQuoteCopy={
            props.data ? props.data[0].data.about_page_main_copy[0].text : null
          }
          handleFadeIn={props.handleFadeIn}
          handleFadeOut={props.handleFadeOut}
        />
        {props.data ? (
          <a href="mailto:hello@r-neil.com" id="about__email-link">
            email for inquiries
          </a>
        ) : null}
      </section>
      <section className="dyptich--wrapper">
        {props.data && window.innerWidth < 1024 ? (
          <Image_Dyptich
            id={props.data && `${props.data[0].id}-about-dyptich`}
            dyptichUrls={
              props.data
                ? [
                    props.data[0].data.image_left_mobile.url,
                    props.data[0].data.image_right_mobile.url
                  ]
                : [
                    props.data[0].data.about_page_image.url,
                    props.data[0].data.about_page_image_2.url
                  ]
            }
            handleFadeIn={props.handleFadeIn}
            handleFadeOut={props.handleFadeOut}
          />
        ) : (
          <Image_Dyptich
            id={props.data && `${props.data[0].id}-about-dyptich`}
            dyptichUrls={
              props.data
                ? [
                    props.data[0].data.about_page_image.url,
                    props.data[0].data.about_page_image_2.url
                  ]
                : null
            }
            handleFadeIn={props.handleFadeIn}
            handleFadeOut={props.handleFadeOut}
          />
        )}
        <Body_Text_Slice
          id="about__body-slice"
          position="two-column"
          bodyCopy={
            props.data ? props.data[0].data.about_page_copy[0].text : null
          }
          handleFadeIn={props.handleFadeIn}
          handleFadeOut={props.handleFadeOut}
        />
        {props.data && renderVideos(props)}
      </section>
    </main>
  );
};

export default About;

// import React, { useEffect, useState } from "react";
// import Nav from "./Nav";
// import Pull_Quote_Slice from "./Slices/Pull_Quote_Slice";
// import Video_Module_Slice from "./Slices/Video_Module_Slice";
// import Image_Dyptich from "./Slices/Image_Dyptich";
// import { Waypoint } from "react-waypoint";

// const About = props => {
//   const renderVideos = props => {
//     if (props.data[0].data.about_page_videos.length >= 1) {
//       return (
//         <div>
//           {props.data[0].data.about_page_videos.map(video => {
//             return (
//               <div key={`${props.data[0].id}-${video.video_title[0].text}`}>
//                 <Video_Module_Slice
//                   id={`${props.data[0].id}-${video.video_title[0].text}`}
//                   mediaModuleUrl={video.about_page_video_url.url}
//                   handleFadeIn={props.handleFadeIn}
//                   handleFadeOut={props.handleFadeOut}
//                   style="media--wide media--about"
//                 />
//                 <div className="about-videos__info">
//                   <p>{video.video_title[0].text}</p>
//                   <p>{video.video_year[0].text}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       );
//     }
//   };
//   const fadeIn = () => {
//     document.querySelector(".about__header").classList.remove("animate");
//     document.querySelector(".about__header").classList.add("is--active");
//   };
//   const fadeOut = () => {
//     document.querySelector(".about__header").classList.remove("is--active");
//     document.querySelector(".about__header").classList.add("animate");
//   };
//   const handleFadeIn = elementId => {
//     const el = document.getElementById(elementId);
//     console.log(el);
//     return () => {
//       el.classList.remove("animate");
//       el.classList.add("is--active");
//     };
//   };
//   const handleFadeOut = elementId => {
//     const el = document.getElementById(elementId);
//     return () => {
//       el.classList.add("animate");
//       el.classList.remove("is--active");
//     };
//   };
//   let [isScroll, setScroll] = useState(true);
//   useEffect(() => {
//     if (isScroll) {
//       setScroll((isScroll = false));
//       props.scrollTop();
//     }
//   });
//   return (
//     <div
//       onScroll={() => {
//         setScroll((isScroll = false));
//       }}
//       className="--isLoaded about"
//     >
//       <Nav className="--light-mode" color="#000" page="about" />
//       <Waypoint
//         onEnter={fadeIn}
//         onLeave={fadeOut}
//         topOffset="15%"
//         bottomOffset="15%"
//       >
//         <div className={`about__header animate`}>
//           <h1 className="about__title">
//             {props.data
//               ? props.data[0].data.about_page_main_copy[0].text
//               : null}
//           </h1>
//           <div className="about__copy">
//             {props.data ? (
//               <a href="mailto:hello@r-neil.com">email for inquiries</a>
//             ) : null}

//             <p>
//               {props.data ? props.data[0].data.about_page_copy[0].text : null}
//             </p>
//           </div>
//         </div>
//       </Waypoint>
//       <div className="dyptich--wrapper">
//         {props.data && window.innerWidth < 1024 ? (
//           <Image_Dyptich
//             id={props.data && `${props.data[0].id}-about-dyptich`}
//             dyptichUrls={
//               props.data
//                 ? [
//                     props.data[0].data.image_left_mobile.url,
//                     props.data[0].data.image_right_mobile.url
//                   ]
//                 : [
//                     props.data[0].data.about_page_image.url,
//                     props.data[0].data.about_page_image_2.url
//                   ]
//             }
//             handleFadeIn={handleFadeIn}
//             handleFadeOut={handleFadeOut}
//           />
//         ) : (
//           <Image_Dyptich
//             id={props.data && `${props.data[0].id}-about-dyptich`}
//             dyptichUrls={
//               props.data
//                 ? [
//                     props.data[0].data.about_page_image.url,
//                     props.data[0].data.about_page_image_2.url
//                   ]
//                 : null
//             }
//             handleFadeIn={handleFadeIn}
//             handleFadeOut={handleFadeOut}
//           />
//         )}
//         {props.data && renderVideos(props)}
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";

//this is where I add the slider functionality

class Gallery extends React.Component {
  state = {
    galleryX: 100,
    galleryWidth: window.innerWidth,
    scrollDelta: this.galleryWidth - this.scrollX,
    dragXOrig: window.innerWidth - 200,
    dragXNew: 0
  };
  handleGalleryBuild = galleryImages => {
    if (galleryImages) {
      return (
        <div
          className="home-header-gallery-wrap"
          style={{ transform: `translate3d(${this.state.galleryX}px, 0 , 0)` }}
        >
          {galleryImages.map(image => {
            return (
              <img
                className="home-header-gallery-images"
                id={`home-header-gallery-image-${galleryImages.indexOf(image)}`}
                key={`home-header-gallery-image-${galleryImages.indexOf(
                  image
                )}`}
                src={image}
              />
            );
          })}
        </div>
      );
    }
  };

  /* 
  - need to grab and update the transform:translate3d() property
  depending on a user event of dragging??? or scrolling?? look into
  what events to use

  PROBLEM: 

  the drag is working, but the event number changes back to zero in 
  a sense, setting the carousel back to the beginning
  need to like 'add' the event to itself

  need to get the 'width' of the entire carousel - can calculate by getting the 
  width of the images, plus the margins.....

  can get the width of the entire element with the elem.offsetWidth prop.
  the problem is how to capture that once the images have been rendered and update
  the state accordingly. 
  */

  /* need to add image numbering and updating 
  - depending on user interaction with scroll 
  can use galleryImages.indexOf(image)/galleryImages.length*/
  // constructor(props) {
  //   super(props);
  //   this.ref = React.createRef();
  // }

  handleMouseWheel = e => {
    e.preventDefault();
    console.log(e.deltaY);

    const speed = 100;

    if (e.deltaY > 0) {
      if (this.state.galleryX >= -this.state.galleryWidth + 1000) {
        this.setState({
          galleryX: this.state.galleryX - 1 * speed
        });
      } else {
        this.state.galleryX = -this.state.galleryWidth + 1000;
      }
    } else if (e.deltaY < 0) {
      if (this.state.galleryX < this.state.galleryWidth * 0.2) {
        this.setState({
          galleryX: this.state.galleryX + 1 * speed
        });
      } else {
        this.state.galleryX = this.state.galleryWidth * 0.2;
      }
    }
  };

  // handleDragStart = e => {
  //   console.log("start" + e.pageX);
  //   this.setState({
  //     dragXNew: e.pageX
  //   });
  //   if (e.pageX < window.innerWidth) {
  //     //conditional checking which direction of drag

  //     this.setState({
  //       galleryX: this.state.galleryX - 1 * 2
  //     });
  //   }
  // };

  // handleDragStop = e => {
  //   console.log("stop" + e.pageX);
  //   this.setState({
  //     dragXOrig: e.pageX
  //   });
  // };

  componentDidUpdate() {
    if (
      document.querySelector("div.home-header-gallery-wrap").offsetWidth &&
      this.state.galleryX == 0
    ) {
      this.setState({
        galleryX: 1,
        galleryWidth: document.querySelector("div.home-header-gallery-wrap")
          .offsetWidth
      });
    }
  }

  render() {
    const { galleryImages } = this.props;
    // console.log(this.state);
    return (
      <div>
        <div className="home-header-gallery" onWheel={this.handleMouseWheel}>
          {galleryImages
            ? this.handleGalleryBuild(galleryImages)
            : "https://source.unsplash.com/random"}
        </div>
      </div>
    );
  }
}

export default Gallery;

/*
onWheel={this.handleMouseWheel} - add back to get the desktop mouse thing
<div
            className="home-header-gallery-wrap"
            onDrag={this.handleDrag}
            style={{ transform: `translate3d(${this.state.galleryX}, 0, 0)` }}
          >



          <div
          className="home-header-gallery-wrap"
          onDrag={this.handleDrag}
          onDragStart={this.handleDragStart}
          onDragEnter={this.handleDragStart}
          onDragExit={this.handleDragStop}
          onDragEnd={this.handleDragStop}
          style={{ transform: `translate3d(${this.state.galleryX}px, 0 , 0)` }}
        >



    // handleDrag = event => {
  //   const gallery = document.querySelector("div.home-header-gallery-wrap");
  //   let delta = event.pageX - currentX;
  //   console.log(delta);

  //   if (
  //     this.state.galleryX >= 0 &&
  //     this.state.galleryX <= gallery.offsetWidth
  //   ) {
  //     this.setState({
  //       galleryX: event.pageX
  //     });
  //   } else {
  //     // this.setState({
  //     //   galleryX: -gallery.offsetWidth
  //     // });
  //   }
  //   gallery.style = `transform: translate3d(${
  //     this.state.galleryX
  //   }px, 0px, 0px);`;
  // };

  // handleDragStart = event => {
  //   console.log(`startX!${event.pageX}`);
  //   this.setState({
  //     startX: event.pageX
  //   });
  // };

  // handleDragStop = event => {
  //   console.log("drag stop!!");
  //   // this.setState({
  //   //   startX:
  //   // });
  // };
*/

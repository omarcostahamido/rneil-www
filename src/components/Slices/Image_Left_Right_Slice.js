import React from "react";

class Image_Left_Right_Slice extends React.Component {
  state = {
    orientation: null
  };
  /* 
  need to check for left or right here and add 
  classes accordingly
  */

  checkLeftOrRight = () => {
    if (this.props.orientation) {
      this.setState({ orientation });
    }
  };

  checkForCopy = () => {
    if (this.props.imageLeftRightCopy) {
      return (
        <div>
          <h1>{this.props.imageLeftRightCopy.text}</h1>
        </div>
      );
    }
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <img src={this.props.imageLeftRightUrl} />
        {this.checkForCopy()}
      </div>
    );
  }
}

export default Image_Left_Right_Slice;

// class Image_Left_Right_Slice extends React.Component {
//   state = {
//     orientation: null
//   };
//   /*
//   need to check for left or right here and add
//   classes accordingly
//   */

//   checkLeftOrRight = () => {
//     if (this.props.orientation) {
//       this.setState({ orientation });
//     }
//   };

//   checkForCopy = () => {
//     if (this.props.imageLeftRightCopy) {
//       return (
//         <div>
//           <h1>{this.props.imageLeftRightCopy.text}</h1>
//         </div>
//       );
//     }
//   };

//   render() {
//     // console.log(this.props);
//     return (
//       <div>
//         <img src={this.props.imageLeftRightUrl} />
//         {this.checkForCopy()}
//       </div>
//     );
//   }
// }

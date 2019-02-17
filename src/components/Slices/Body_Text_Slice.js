import React from "react";

/* could pass more info from api here to configure different classes based
on what type of body copy it is */

class Body_Text_Slice extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.bodyCopy}</p>
      </div>
    );
  }
}

export default Body_Text_Slice;

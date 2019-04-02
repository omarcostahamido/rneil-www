import React from "react";
import { Waypoint } from "react-waypoint";

const Image_Dyptich = props => {
  // const fadeInLeft = props.handleFadeIn(`${props.id}-left`);
  // const fadeOutLeft = props.handleFadeOut(`${props.id}-left`);
  // const fadeInRight = props.handleFadeIn(`${props.id}-right`);
  // const fadeOutRight = props.handleFadeOut(`${props.id}-right`);
  const fadeInLeft = () => {
    document.getElementById(`${props.id}-left`).classList.remove("animate");
    document.getElementById(`${props.id}-left`).classList.add("is--active");
  };
  const fadeOutLeft = () => {
    document.getElementById(`${props.id}-left`).classList.add("animate");
    document.getElementById(`${props.id}-left`).classList.remove("is--active");
  };
  const fadeInRight = () => {
    document.getElementById(`${props.id}-right`).classList.remove("animate");
    document.getElementById(`${props.id}-right`).classList.add("is--active");
  };
  const fadeOutRight = () => {
    document.getElementById(`${props.id}-right`).classList.add("animate");
    document.getElementById(`${props.id}-right`).classList.remove("is--active");
  };
  //hack so waypoint wont throw warnings while getting props on about
  const intermittent = () => {};
  return (
    <div className="dyptich">
      <div className="dyptich__image left ">
        <Waypoint
          onEnter={props.id ? fadeInLeft : intermittent}
          onLeave={props.id ? fadeOutLeft : intermittent}
        >
          <img
            className="animate"
            id={`${props.id}-left`}
            src={props.dyptichUrls && props.dyptichUrls[0]}
          />
        </Waypoint>
      </div>
      <div className="dyptich__image right ">
        <Waypoint
          onEnter={props.id ? fadeInRight : intermittent}
          onLeave={props.id ? fadeOutRight : intermittent}
        >
          <img
            className="animate"
            id={`${props.id}-right`}
            src={props.dyptichUrls && props.dyptichUrls[1]}
          />
        </Waypoint>
      </div>
    </div>
  );
};

export default Image_Dyptich;

/**
 * 
 * 
 * 
 * import React from "react";
import { Waypoint } from "react-waypoint";

class Image_Dyptich extends React.Component {
  fadeInLeft = () => {
    this.props.handleFadeIn(`${this.props.id}-left`);
  };
  fadeOutLeft = () => {
    this.props.handleFadeOut(`${this.props.id}-left`);
  };
  fadeInRight = () => {
    this.props.handleFadeIn(`${this.props.id}-right`);
  };
  fadeOutRight = () => {
    this.props.handleFadeOut(`${this.props.id}-right`);
  };

  intermittent = () => {
    console.log("fading");
  };

  componentDidMount() {
    // this.fadeInLeft();
    // this.fadeOutLeft();
    // this.fadeInRight();
    // this.fadeOutRight();
    this.setState({
      fadeInLeft: this.props.handleFadeIn(`${this.props.id}-left`),
      fadeOutLeft: this.props.handleFadeOut(`${this.props.id}-left`)
    });
  }

  componentDidUpdate() {
    console.log("updating");
  }
  componentWillUnmount() {
    console.log = "unmounting";
  }

  render() {
    console.log(this.state);
    return (
      <div className="dyptich">
        <div className="dyptich__image left ">
          <Waypoint
            onEnter={this.props.id ? this.state.fadeInLeft : this.intermittent}
            onLeave={this.props.id ? this.state.fadeOutLeft : this.intermittent}
          >
            <img
              className="animate"
              id={`${this.props.id}-left`}
              src={this.props.dyptichUrls && this.props.dyptichUrls[0]}
            />
          </Waypoint>
        </div>
        <div className="dyptich__image right ">
          <Waypoint
            onEnter={this.props.id ? this.fadeInRight : this.intermittent}
            onLeave={this.props.id ? this.fadeOutRight : this.intermittent}
          >
            <img
              className="animate"
              id={`${this.props.id}-right`}
              src={this.props.dyptichUrls && this.props.dyptichUrls[1]}
            />
          </Waypoint>
        </div>
      </div>
    );
  }
}

export default Image_Dyptich;
 */

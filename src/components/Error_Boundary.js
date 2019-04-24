import React from "react";
import Nav from "./Nav";

class Error_Boundary extends React.Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null
  };
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <Nav color="fff" class="--dark-mode" page="error" />
          <span
            style={{
              color: "#fff",
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "35px"
            }}
          >
            <h1 style={{ paddingBottom: "1vw" }}>Something went wrong...</h1>
            <p>please refresh, come back later, or harass your local dev</p>
          </span>
        </div>
      );
    }
    return this.props.children;
  }
}

export default Error_Boundary;

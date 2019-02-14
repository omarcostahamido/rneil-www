import React from "react";
import Homepage from "./Homepage.js";
import { Router } from "@reach/router";
import Casestudy from "./Casestudy.js";

//add routing here

const RootApp = () => {
  return (
    <div>
      <Router>
        <Homepage
          path="/"
          token={process.env.REACT_APP_ACCESS_TOKEN}
          clientId={process.env.REACT_APP_CLIENT_ID}
          clientSecret={process.env.REACT_APP_CLIENT_SECRET}
          apiEndpoint={process.env.REACT_APP_BASE_URL}
        />
        <Casestudy
          path="/casestudy/:slug/:id"
          apiEndpoint={process.env.REACT_APP_BASE_URL}
          token={process.env.REACT_APP_ACCESS_TOKEN}
        />
      </Router>
    </div>
  );
};

export default RootApp;

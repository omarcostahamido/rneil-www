import React from "react";
import Homepage from "./Homepage.js";

//add routing here

const RootApp = () => {
  return (
    <div>
      <Homepage
        token={process.env.REACT_APP_ACCESS_TOKEN}
        clientId={process.env.REACT_APP_CLIENT_ID}
        clientSecret={process.env.REACT_APP_CLIENT_SECRET}
        apiEndpoint={process.env.REACT_APP_BASE_URL}
      />
    </div>
  );
};

export default RootApp;

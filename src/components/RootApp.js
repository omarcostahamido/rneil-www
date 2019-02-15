import React from "react";
import Homepage from "./Homepage.js";
import { Router } from "@reach/router";
import Casestudy from "./Casestudy.js";

/* Re: routing - i foresee a potential problem with routes in production
i.e. the path might not work if someone navigates directly to it. 
made the casestudy route 'relative' to see if that would help. wont know until
i get this into action.  

https://tylermcginnis.com/react-router-cannot-get-url-refresh/ 

Netlify also supports client-side routing, you 
just need to create a /_redirects file with the following rule
As you can probably guess, that tells Netlify to 
redirect all requests to .index.html

*/

const RootApp = () => {
  return (
    <div>
      <Router>
        <Homepage
          path="/*"
          token={process.env.REACT_APP_ACCESS_TOKEN}
          clientId={process.env.REACT_APP_CLIENT_ID}
          clientSecret={process.env.REACT_APP_CLIENT_SECRET}
          apiEndpoint={process.env.REACT_APP_BASE_URL}
        />
        <Casestudy
          path="casestudy/:slug/:id"
          apiEndpoint={process.env.REACT_APP_BASE_URL}
          token={process.env.REACT_APP_ACCESS_TOKEN}
        />
      </Router>
    </div>
  );
};

export default RootApp;

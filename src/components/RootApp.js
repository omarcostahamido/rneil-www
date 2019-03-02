import React from "react";
import Homepage from "./Homepage.js";
import { Router } from "@reach/router";
import Casestudy from "./Casestudy.js";
import About from "./About";
import Prismic from "prismic-javascript";

/* Re: routing - i foresee a potential problem with routes in production
i.e. the path might not work if someone navigates directly to it. 
made the casestudy route 'relative' to see if that would help. wont know until
i get this into action.  

https://tylermcginnis.com/react-router-cannot-get-url-refresh/ 

Netlify also supports client-side routing, you 
just need to create a /_redirects file with the following rule
As you can probably guess, that tells Netlify to 
redirect all requests to .index.html

--- could move api call to this root and pass down the data to child components....


 <Casestudy
          path="/casestudy/:slug/:id"
          apiEndpoint={process.env.REACT_APP_BASE_URL}
          token={process.env.REACT_APP_ACCESS_TOKEN}
        />
*/

class RootApp extends React.Component {
  state = {
    casestudiesFeatured: null,
    casestudyNum: null
  };

  getCasestudyOrder = () => {
    Prismic.api(process.env.REACT_APP_BASE_URL, {
      accessToken: process.env.REACT_APP_ACCESS_TOKEN
    }).then(api => {
      api
        .query(Prismic.Predicates.at("document.type", "casestudy"), {
          fetch: [
            "casestudy.casestudy_order",
            "casestudy.casestudy_hero_image",
            "casestudy.casestudy_hero_image_mobile",
            "casestudy.casestudy_title",
            "casestudy.slugs",
            "casestudy.id"
          ]
        })
        .then(response => {
          if (response) {
            this.setState({
              casestudiesFeatured: response.results,
              casestudyNum: response.results.length
            });
            // console.log(this.state);
            this.handleCleanData();
          }
        })
        .catch(error => console.log(error));
    });
  };

  handleCleanData = () => {
    if (this.state.casestudiesFeatured) {
      let casestudiesFeatured = [];

      for (let i = 0; i < this.state.casestudyNum; i++) {
        casestudiesFeatured.push(i);
      }

      this.state.casestudiesFeatured.forEach(casestudy => {
        casestudiesFeatured[casestudy.data.casestudy_order - 1] = casestudy;
      });

      if (this.state.casestudiesFeatured) {
        this.setState({
          casestudiesFeatured
        });
      }
    }
  };

  setupCasestudyRoutes = () => {
    if (this.state.casestudiesFeatured) {
      {
        this.state.casestudiesFeatured.map(casestudy => {
          return (
            <Casestudy
              path={`casestudy/${casestudy.slugs[0]}/${casestudy.id}`}
              apiEndpoint={process.env.REACT_APP_BASE_URL}
              token={process.env.REACT_APP_ACCESS_TOKEN}
              data={casestudy.data}
              key={casestudy.id}
            />
          );
        });
      }
    }
  };

  componentDidMount() {
    this.getCasestudyOrder();
  }

  render() {
    return (
      <div>
        <Router>
          <Homepage
            path="/*"
            token={process.env.REACT_APP_ACCESS_TOKEN}
            clientId={process.env.REACT_APP_CLIENT_ID}
            clientSecret={process.env.REACT_APP_CLIENT_SECRET}
            apiEndpoint={process.env.REACT_APP_BASE_URL}
            casestudiesFeatured={this.state.casestudiesFeatured}
          />

          {this.setupCasestudyRoutes()}

          <About
            path="about"
            apiEndpoint={process.env.REACT_APP_BASE_URL}
            token={process.env.REACT_APP_ACCESS_TOKEN}
          />
        </Router>
      </div>
    );
  }
}

export default RootApp;

/*
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

        <About
          path="about"
          apiEndpoint={process.env.REACT_APP_BASE_URL}
          token={process.env.REACT_APP_ACCESS_TOKEN}
        />
      </Router>
    </div>
  );
};

*/

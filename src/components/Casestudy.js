import React from "react";
import Prismic from "prismic-javascript";

/* 

need to get a lot of props or do another api call here to get the data???
probably smart to get the props from the parent and pass down in that
big clean data function?? or just give me all the 'doc' from the api
and sort out the render order here 
-- use the slug to have a filtered call to the api?????? 

*/

class Casestudy extends React.Component {
  state = {
    doc: null
  };

  getPrismicData = () => {
    const { token, apiEndpoint } = this.props;

    Prismic.api(apiEndpoint, { accessToken: token }).then(api => {
      api
        .query(Prismic.Predicates.any("document.id", [`${this.props.id}`]))
        .then(response => {
          if (response) {
            this.setState({
              doc: response.results
            });
            console.log(this.state.doc);
          }
        })
        .catch(error => console.log(error));
    });
  };

  /* do all my data manipulation here once I know what to grab. 
  now everything I need is set up in the 'doc' state as per the id */

  componentDidMount() {
    this.getPrismicData();
  }

  render() {
    return (
      <div>
        <h1>casestudy!!!</h1>
        {this.props.slug}
      </div>
    );
  }
}

export default Casestudy;

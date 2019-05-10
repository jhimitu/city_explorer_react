'use strict';

import React from "react";
import superagent from "superagent";
import { async } from "q";

class Yelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yelpData: []
    }
  }

  getYelp = async () => {
    let data = await superagent.get(`${this.props.url}/yelp`)
      .query({ data: this.props.search });
      let yelpData = data.body;
      this.setState({
        yelpData
      });
  }

  componentDidMount() {
    if(this.props.search !== undefined) {
      this.getYelp();
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.search !== this.props.search) {
      this.getYelp();
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <section>
          <h3>Results from the Yelp API</h3>
          <ul className="yelp-results">{this.state.yelpData.map((data, i) => 
            <li key={i}>{data.name}</li>
            )}</ul>
        </section>
      </React.Fragment>
    );
  }
}

export default Yelp;

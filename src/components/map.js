'use strict';

import React from "react";
import superagent from "superagent";
import { async } from "q";

class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <React.Fragment>
        <img id="map" className="hide" src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.latitude}%2c%20${this.props.longitude}&zoom=13&size=600x300&maptype=roadmap
  &key=${process.env.REACT_APP_GEOCODE_API_KEY}`} alt="Map of search query"></img>
        <h2 className="query-placeholder"></h2>
      </React.Fragment>
    );
  }
}

export default Map;
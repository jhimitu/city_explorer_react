'use strict';

import React from "react";

class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <React.Fragment>
        <img id="map" className="hide" src="https://via.placeholder.com/600x400" alt="Map of search query"></img>
        <h2 className="query-placeholder"></h2>
      </React.Fragment>
    );
  }
}

export default Map;
'use strict';

import React from "react";
import Header from "./header.js";
import SearchForm from "./search-form.js";
import SearchResults from "./search-result.js";
import Map from "./map.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {}
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchForm />
        <Map />
        <SearchResults />
      </React.Fragment>
    );
  }
}

export default App;

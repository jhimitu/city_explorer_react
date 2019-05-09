'use strict';

import React from "react";
import Header from "./header.js";
import SearchForm from "./search-form.js";
import SearchResults from "./search-result.js";

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Map />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </React.Fragment>
    );
  }
}

class Map extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
        <img src="https://via.placeholder.com/600x400" />
        </div>
      </React.Fragment>
    );
  }
}

class Result extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <h3>Results from the API</h3>
          <ul className="api-results">
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
          </ul>
        </section>
      </React.Fragment>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchForm />
        <Main />
        <SearchResults />
      </React.Fragment>
    );
  }
}

export default App;

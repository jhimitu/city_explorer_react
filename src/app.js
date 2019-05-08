'use strict';

import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>City Explorer</h1>
        <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
      </React.Fragment>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Search />
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

class Search extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="search">Search for a location</label>
        <input type="text" name="search" placeholder="Enter a location here" />
        <button>Explore!</button>
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
        <Main />
      </React.Fragment>
    );
  }
}

export default App;

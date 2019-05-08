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
      </React.Fragment>
    );
  }
}

class Search extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label for="search">Search for a location</label>
        <input type="text" name="search" placeholder="Enter a location here" />
        <button>Explore!</button>
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

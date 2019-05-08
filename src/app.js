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

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }
}

export default App;

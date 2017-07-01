import React, { Component } from 'react';
import './Counter';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Counter/>
      </div>
    );
  }
}

export default App;

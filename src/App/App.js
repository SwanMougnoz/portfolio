import React, { Component } from 'react';
import './Counter/Counter';
import './App.css';
import Counter from "./Counter/Counter";
import Header from "./Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Counter/>
      </div>
    );
  }
}

export default App;

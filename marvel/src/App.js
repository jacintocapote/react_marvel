import React, { Component } from 'react';
import logo from './logo.svg';
import Marvel from './components/marvel.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Marvel Characters search</h2>
        </div>
        <Marvel />
      </div>
    );
  }
}

export default App;

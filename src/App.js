import React, { Component } from 'react';
import logo from './logo.svg';
import CalculatorContainer from './containers/calculatorContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Invoice Creator</h1>
      </header>
        <CalculatorContainer/>
      </div>
    );
  }
}

export default App;

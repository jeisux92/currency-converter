import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Calculator from './components/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Calculator/>
      </div>
    );
  }
}

export default App;

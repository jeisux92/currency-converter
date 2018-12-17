import React, { Component } from "react";
import "./App.css";
import Calculator from "./components/calculator/Calculator";


class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row mt-5 jumbotron">
          <Calculator/>
        </div>
      </div>
    );
  }
}

export default App;

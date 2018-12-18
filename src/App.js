import React, { Component } from "react";
import "./App.scss";
import Calculator from "./components/calculator/Calculator";


class App extends Component {
  render() {
    return (
      <div className="App container pt-5">
        <div className="row jumbotron">
          <Calculator/>
        </div>
      </div>
    );
  }
}

export default App;

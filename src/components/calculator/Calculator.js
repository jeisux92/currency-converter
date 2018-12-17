import React, { Component } from "react";
import "./Calculator.scss";
import worker from '../../core/currencyWebWorker.js';
debugger;
var myWorker = new Worker("../../core/currencyWebWorker.js");

myWorker.onmessage = function (oEvent) {
  console.log("Called back by the worker!\n");
};

myWorker.postMessage(""); 

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      currentCurrency: ""
    };
  }
  calculate = e => {
    let result = sessionStorage["current"];
    if(!result){

    }
    console.log(this.state.currentCurrency);
  };
  handleInput = e => {
    this.setState({
      currentCurrency: e.target.value
    });
  };

  render() {
    return (
      <div className="col-sm-12">
        <div className="center-block">
          <div className="row">
            <div className="col-sm-6">
              <input
                className="form-control form-control-sm text-center"
                placeholder="UE"
                onChange={this.handleInput}
              />
            </div>
            <div className="col-sm-6">
              <input
                className="form-control form-control-sm text-center"
                readOnly="readonly"
                value={this.state.value}
                placeholder="USD"
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <button
                className="btn btn-sm btn-primary"
                onClick={this.calculate}
              >
                CALCULATE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

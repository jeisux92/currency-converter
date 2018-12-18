import React, { Component } from "react";
import "./Calculator.scss";
import WebWorker from "../../core/worker.setup";
import Worker from "../../core/currency.worker.js";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      currentCurrency: "",
      rate: 0
    };
    this.worker = new WebWorker(Worker);
  }
  calculate = e => {
    var regex = /^\d+(\.\d{1,4})?$/g;
    var match = regex.test(this.state.currentCurrency);
    if (!match) {
      this.setState({
        error: "Format not valid",
        value: ""
      });
      return;
    }

    let rate = this.state.rate;
    if (!rate) {
      this.setState({
        error: "There is not connection",
        value: ""
      });
    } else {
      this.setState({
        value: `U$${rate * Number(this.state.currentCurrency)}`,
        error: ""
      });
    }
  };
  handleInput = e => {
    this.setState({
      currentCurrency: e.target.value
    });
  };

  componentWillMount() {
    this.worker.onmessage = e => {
      this.setState({ rate: e.data.USD });
    };
  }
  render() {
    return (
      <div className="col-sm-12">
        <div className="center-block">
          <div className="row form">
            <div className="col-sm-6 mt-2">
              <input
                className="form-control form-control-sm text-center"
                placeholder="UE"
                value={this.state.currentCurrency}
                onChange={this.handleInput}
              />
              <label className={this.state.error ? "error" : ""}>
                {this.state.error}
              </label>
            </div>
            <div className="col-sm-6 mt-2">
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

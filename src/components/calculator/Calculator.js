import React, { Component } from 'react'
import './Calculator.scss'
import WebWorker from '../../core/worker.setup'
import Worker from '../../core/currency.worker.js'

class Calculator extends Component {
  constructor () {
    super()
    this.state = {
      value: '',
      currentCurrency: '',
      rate: 0
    }
    this.worker = new WebWorker(Worker)
  }
  calculate = e => {
    let rate = this.state.rate
    if (!rate) {
    } else {
      this.setState({
        value: rate * Number(this.state.currentCurrency)
      })
    }
    console.log("Connection lost");
  }
  handleInput = e => {
    this.setState({
      currentCurrency: e.target.value
    })
  }

  componentWillMount () {
    this.worker.onmessage = e => {
      this.setState({ rate: e.data.USD })
    }
  }
  render () {
    return (
      <div className='col-sm-12'>
        <div className='center-block'>
          <div className='row'>
            <div className='col-sm-6 mt-2'>
              <input
                className='form-control form-control-sm text-center'
                placeholder='UE'
                onChange={this.handleInput}
              />
            </div>
            <div className='col-sm-6 mt-2'>
              <input
                className='form-control form-control-sm text-center'
                readOnly='readonly'
                value={this.state.value}
                placeholder='USD'
              />
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-md-12'>
              <button
                className='btn btn-sm btn-primary'
                onClick={this.calculate}
              >
                CALCULATE
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator

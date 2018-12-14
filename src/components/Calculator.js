import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputLabel';

class Calculator extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div class='container'>
        <FormControl>
          <InputLabel htmlFor='adornment-amount'>Amount</InputLabel>
          <Input
            pattern="[0-9]"
            id='adornment-amount'
            startAdornment={<InputAdornment position='start'>$USD</InputAdornment>}
          />
        </FormControl>
        <Button variant='contained' color='primary'>
          Hello World
        </Button>
      </div>
    )
  }
}

export default Calculator

import React, { Component } from 'react'
import Counter from '../../MyComponent'

export default class CounterPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    }
  }
  
  handleChange = ({target: {value, name}}) => {
    this.setState( {
      [name]: value,
    })
  }

  render() {
    const {step} = this.state
    return (
      <>
        <input type="range" name='step' value={ step} onChange={this.handleChange}/>
        <Counter step={ step }  /> 
      </>
      )
  }
}

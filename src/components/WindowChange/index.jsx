import React, { Component } from 'react'

export default class WindowChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    }
  }


  resizeHandler = ( e ) => {
    this.setState( {
      x: e.target.innerWidth,
      y: e.target.innerHeight,

    })

  }

  componentDidMount = () => {
    window.addEventListener('resize', this.resizeHandler)
  }
  
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.resizeHandler)
    
  }
  
  
  render() {
    return (
      <div>
        <p>x: { this.state.x }</p>
        <p>y: { this.state.y}</p>
      </div>
    )
  }
}

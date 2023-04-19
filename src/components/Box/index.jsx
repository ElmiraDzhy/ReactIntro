import React, { Component } from 'react';
import styles from './Box.module.css';

export default class Box extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
    }
  }


  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  render() {
    return (
      <div 
        onClick={this.increment} 
        className={styles.box}
      >
          {this.state.counter}
      </div>
    )
  }
}

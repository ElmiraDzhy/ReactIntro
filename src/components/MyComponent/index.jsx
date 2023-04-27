import React from 'react';
import PropTypes from 'prop-types'

class Counter extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        counter: 0,
      };

  }


  onClickHandler = (e) => {

    const {counter} = this.state;

    if(e.target.name === 'plus'){
      this.setState({
        counter:  counter + Number(this.props.step),
      });

    }else{
      this.setState({
        counter:  counter > 0 ? counter - Number(this.props.step): 0,
      });

    }
  }  

  shouldComponentUpdate( nextProps, nextState ) {
    if ( this.props.step !== nextProps.step ) {
      return false;
    }

    return true;
  }

 

  render() {
    const {counter} = this.state;

    return (
      <div>
        <h1>{counter}</h1>
        <button name="minus" onClick={this.onClickHandler}>-</button>
        <button name="plus" onClick={this.onClickHandler}>+</button>
     
      </div>
    )
  }
}

Counter.propTypes = {
  step: PropTypes.number,
}

Counter.defaultProps = {
  step: 5,
}
export default Counter;

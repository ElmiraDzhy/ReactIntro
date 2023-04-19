import React from 'react';

class Counter extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        counter: 0,
      };

  }


  onClickHandler = (e) => {
    
    let {counter} = this.state;

    if(e.target.name === 'plus'){
      this.setState({
        counter: counter+=1,
      });

    }else{
      this.setState({
        counter: counter-=1,
      });

    }
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

export default Counter;

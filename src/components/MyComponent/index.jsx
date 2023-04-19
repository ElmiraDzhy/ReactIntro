import React from 'react';

class MyComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }

    }

  render() {
    const {name, age} = this.props;

    return (
      <div>
        <b>Hello, {name}!</b> 
        <p>{name} is {age < 18 ? "not adult" : "adult"}.</p>
      </div>
    )
  }
}

export default MyComponent;

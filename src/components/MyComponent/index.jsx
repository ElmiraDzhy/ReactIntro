import React from 'react';

class MyComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        }

    }

  render() {
    console.log(this);
    return (
      <div>
        Hello from Component!
      </div>
    )
  }
}

export default MyComponent;

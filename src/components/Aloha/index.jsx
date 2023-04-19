import React from 'react'

class Aloha extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLeaving: true,
      welcome: 'Hello', 
    }
  }

  greeting = () => {
    const {isLeaving} = this.state;
    this.setState({
      isLeaving: !isLeaving,
      welcome: isLeaving ? "Bye" : "Hello",
    });
  }


  render(){
    const {name} = this.props;
    return (
      <div>
        {name}, {this.state.welcome}
        <button onClick={this.greeting}>Change</button>
      </div>
    )
  }

}

export default Aloha

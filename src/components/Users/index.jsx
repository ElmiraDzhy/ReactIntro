import React, { Component } from 'react';
import Aloha from '../Aloha';

export default class Users extends Component {

  constructor(props){
    super(props);
    this.state = {
      users: [{
      name: 'Mike',
      age: 21,
      id: 'Rw45kO',
    },
    {
      name: 'Lola',
      age: 11,
      id: 'Pu98xV',

    },
    {
      name: 'Tom',
      age: 61,
      id: 'It09lO',

    },
  ],
  
  }
    
  }



  changeJohn = () => {
    const arr = this.state.users.map( (u) => {
      if(u.name === 'Tom'){
        return {
          name: 'John',
          age: u.age,
          id: u.id,
        }
      }
      return u;

    })
    this.setState({
      users: arr,
    })
  }



  render() {
    const {users} = this.state;

    return (
      <div>
        <h1 onClick={this.changeJohn}>Header</h1>
        {users.map((user) => <Aloha name={user.name} key={user.id}/>)}
      </div>
    )
  }
}

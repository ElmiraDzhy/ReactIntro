import React, { Component } from 'react';
import Spinner from './Spinner';
const API_BASE = 'https://fakestoreapi.com/users';

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      error: null,
      isFetching: true,
    };
  }

  componentDidMount = () => {

    fetch(API_BASE)
      .then(res => res.json())
      .then(data =>
        this.setState({
          users: data,
        })
      )
      .catch(e => {
        this.setState({
          error: e,

        });
      } )
      .finally( this.setState( {
        isFetching: false,
        
      }))
     
  };

  render() {
    const { users, error, isFetching } = this.state;
    const usersMap = users.map(u => (
      <li key={u.id}>
        {u.name.firstname} {u.name.lastname}
      </li>
    ));

    if (isFetching) {
      return <Spinner />;
    }

    if (error) {
      return <div className="">Error...</div>;
    }

    return <ul>{usersMap}</ul>;
  }
}

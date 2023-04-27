import React, { Component } from 'react';
import Spinner from '../UserList/Spinner';

export default class UserLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isFetching: true,
      users: [],
    };
  }

  componentDidMount = () => {
    fetch('/users.json')
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
      })
      .finally(
        this.setState({
          isFetching: false,
        })
      );
  };

  render() {
    const { error, users, isFetching } = this.state;
    return (
      <div>
        {error && <div>OOPs</div>}
        {isFetching && <Spinner />}
        <ul>
          {users.map(u => (
            <li>{u.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

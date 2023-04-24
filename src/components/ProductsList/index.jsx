import React, { Component } from 'react';
import Spinner from '../UserList/Spinner';
import ProductCard from './ProductCard';

const API_BASE = 'https://fakestoreapi.com/products';

export default class PropductsList extends Component {
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
      })
      .finally(
        this.setState({
          isFetching: false,
        })
      );
  };

  render() {
    const { users, error, isFetching } = this.state;
    const products = users.map(p => (
      <ProductCard key={p.id} data={p}/>
    ));

    if (isFetching) {
      return <Spinner />;
    }

    if (error) {
      return <div className="">Error...</div>;
    }

    return (
      <section>
        {products}
      </section>
    );
  }
}

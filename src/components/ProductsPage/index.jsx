import PropductsList from './../ProductsList';
import ProductBag from './../ProductBag';
import React from 'react';

export const ProductContext = React.createContext();

class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      choosedProduct: {},
    };
  }

  countHandler = v => {
    this.setState({
      count: v,
    });
  };

  chooseProductHandler = p => {
    this.setState( {
      choosedProduct: p,
    })
  }

  render() {
    const { count, choosedProduct } = this.state;

    return (
      <ProductContext.Provider
        value={{ count: count, countHandler: this.countHandler, chooseProductHandler: this.chooseProductHandler }}
      >
        { <ProductBag count={ count } choosedProduct={ choosedProduct} />}
        {<PropductsList />}
      </ProductContext.Provider>
    );
  }
}

export default ProductPage;
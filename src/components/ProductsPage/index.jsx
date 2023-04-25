import PropductsList from './../ProductsList';
import ProductBag from './../ProductBag';
import React from 'react';

export const ProductContext = React.createContext();

class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      choosedProducts: [],
      summary: 0,
    };
  }

  countHandler = v => {
    this.setState({
      count: v,
    });
  };

  chooseProductHandler = p => {
    const newProductsArr = [...this.state.choosedProducts];
    newProductsArr.push(p);
    this.setState({
      choosedProducts: newProductsArr,
    });
  };

  setSummary = v => {
    this.setState(() => ({
      summary: this.state.summary + v,
    }));
  };

  render() {
    const { count, choosedProducts, summary } = this.state;

    return (
      <ProductContext.Provider
        value={{
          count: count,
          countHandler: this.countHandler,
          chooseProductHandler: this.chooseProductHandler,
          setSummary: this.setSummary,
        }}
      >
        {<ProductBag count={count} choosedProducts={choosedProducts} summary={summary} />}
        {<PropductsList />}
      </ProductContext.Provider>
    );
  }
}

export default ProductPage;

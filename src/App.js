import React from 'react';
import PropductsList from './components/ProductsList';
import ProductBag from './ProductBag';

export const ProductContext = React.createContext();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  countHandler = v => {
    this.setState({
      count: v,
    });
  };

  render() {
    const { count } = this.state;

    return (
      <ProductContext.Provider
        value={{ count: count, countHandler: this.countHandler }}
      >
        {<ProductBag count={count} />}
        {<PropductsList />}
      </ProductContext.Provider>
    );
  }
}

export default App;

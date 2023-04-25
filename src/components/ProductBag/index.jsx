import React from 'react';
import ProductItem from './ProductItem';
import styles from './ProductBag.module.css';

function ProductBag(props) {
  const { count, choosedProducts, summary } = props;

  return (
    <div className={styles.container}>
      <p>Products in Cart: {count}</p>
      {choosedProducts.map(p => (
        <ProductItem data={p} />
      ) ) }
      
      <p>Sum: { summary}</p>
    </div>
  );
}

export default ProductBag;

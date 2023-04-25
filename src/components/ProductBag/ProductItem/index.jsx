import React from 'react';
import styles from './ProductItem.module.css';

function ProductItem(props) {
  const {
    data: { title, image, price },
  } = props;
  return (
    <div className={styles.container}>
      <p className={ styles.title }>{ title }</p>
      <div className={styles.wrapper}>
      <img className={styles.img} src={image} alt="productImage" />
      <p>{price}</p>

      </div>
    
      <button  className={styles.btn}>x</button>
    </div>
  );
}

export default ProductItem;

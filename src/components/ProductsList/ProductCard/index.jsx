import React from 'react'
import styles from './ProductCard.module.css'

function ProductCard( props ) {
  
  const { title, price, image } = props.data;
  return (
    <article className={styles.container}>
      <img className={styles.image} src={image} alt="" />
      <h1>{ title }</h1>
      <p>{ price}</p>
    </article>
  )
}

export default ProductCard

import React from 'react'

function ProductBag( props ) {

  const { count, choosedProduct } = props;
  const arr = [];



  const style = {
    width: '300px',
    height: '50px',
    border: '1px solid blue',
    height: '100px',

  }
  
  return (
    <div style={style}>
      Products in Cart: { count }
      Choosed:
    </div>
  )
}

export default ProductBag;

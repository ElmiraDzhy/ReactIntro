import React from 'react'

function ProductBag( props ) {

  const { count } = props;
  

  const style = {
    width: '300px',
    height: '50px',
    border: '1px solid blue'

  }
  
  return (
    <div style={style}>
      {count}
    </div>
  )
}

export default ProductBag;

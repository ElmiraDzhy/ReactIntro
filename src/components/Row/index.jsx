import React from 'react'

function Row( props ) {
  const { children } = props;

  
  return (
    <div styles={ { display: 'flex' } }>
      {children}
    </div>
  )
}

export default Row

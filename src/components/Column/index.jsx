import React from 'react'
import './style.css';

function Column(props) {
  const { children, colNum } = props;


  return (
    <div  className={`col-${colNum}`}>
      {children}
    </div>
  )
}

export default Column

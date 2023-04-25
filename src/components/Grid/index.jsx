import React from 'react';

function Grid(props) {
  const { children } = props;
  return (
    <div style={{maxWidth: '1200px', display: 'grid'}}>
      {children}
    </div>
  )
}

export default Grid


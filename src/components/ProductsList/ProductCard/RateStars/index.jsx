import React from 'react';
import Icon from '@mdi/react';
import { mdiStar, mdiStarOutline } from '@mdi/js';

const MAX_STARS = 5;

function RateStars( props ) {
  const { rate } = props;
  const amount = Math.round( rate ); 
   
  const stars = ( amount ) => {
    const arr = [];
    for ( let i = 0; i < amount; i++ ){
      arr.push( <Icon path={ mdiStar } size={ 0.8 } /> ); 
    }
    if ( amount < MAX_STARS ) {
      for ( let i = amount; i < MAX_STARS;  i++){
        arr.push(<Icon path={mdiStarOutline} size={0.8} />)
      }
    }
    return arr;
  }
  return (
    <div>
      {stars(amount)}
      
    </div>
  )
}

export default RateStars

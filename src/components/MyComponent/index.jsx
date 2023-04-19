import React from 'react';

class DayPart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          
        }

    }

  render() {
    const {hours} = this.props;

    let welcome = '';

    if(hours >= 11 && hours <= 16){
      welcome = 'Good day';
    }
    if(hours >= 17 && hours <= 21){
      welcome = 'Good evening';
    }
    return (
      <div>
        {welcome}
      </div>
    )
  }
}

export default DayPart;

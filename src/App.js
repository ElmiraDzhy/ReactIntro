import React from 'react';
import PropductsList from './components/ProductsList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRendering: true,
    };
  }

  onClick = () => {
    this.setState({
      isRendering: false,
    });
  };

  render() {
    const { isRendering } = this.state;

    return (
      <>
        <button onClick={this.onClick}>Kill me</button>
        {<PropductsList/>}
      </>
    );
  }
}

export default App;

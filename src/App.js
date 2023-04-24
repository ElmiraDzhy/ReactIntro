import React from "react";
import Aloha from './components/Aloha'

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
				{ <Aloha user={ {name: '', id: 1}} deletedCallback={()=> {}} />}
			</>
		);
	}
}

export default App;


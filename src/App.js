import React from "react";
import Tree from "./components/Tree";

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
				{isRendering ? <Tree /> : null}
			</>
		);
	}
}

export default App;


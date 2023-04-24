import React from "react";
import ToDoList from "./components/ToDoList";

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
				{<ToDoList/>}
			</>
		);
	}
}

export default App;


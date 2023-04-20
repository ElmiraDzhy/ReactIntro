import React from "react";

class Aloha extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLeaving: false,
		};
	}

	greeting = () => {
		const { isLeaving } = this.state;
		this.setState({
			isLeaving: !isLeaving,
		});
	};

	render() {
		const { name } = this.props;
		return (
			<li>
				{name}, {this.state.isLeaving ? "Bye" : "Hello"}
				<button onClick={this.greeting}>Change</button>
			</li>
		);
	}
}

export default Aloha;


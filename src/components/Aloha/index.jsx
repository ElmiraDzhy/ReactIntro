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

	delete = () => {
		const {
			user: { id },
			deleteCallback,
		} = this.props;
		deleteCallback(id);
	};

	render() {
		const { name } = this.props.user;
		return (
			<li>
				{name}, {this.state.isLeaving ? "Bye" : "Hello"}
				<button onClick={this.greeting}>Change</button>
				<button onClick={this.delete}>x</button>
			</li>
		);
	}
}

export default Aloha;


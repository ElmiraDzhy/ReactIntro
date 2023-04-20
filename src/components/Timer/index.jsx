import React, { Component } from "react";

export default class Timer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};

		this.timerId = null;
	}

	componentDidMount() {
		this.timerId = this.start();
	}

	componentWillUnmount() {
		this.stop();
	}

	start = () => {
		return setInterval(() => {
			this.setState({
				count: this.state.count + 1,
			});
		}, 1000);
	};

	stop = () => {
		clearInterval(this.timerId);
	};

	render() {
		const { count } = this.state;

		return <h1>{count}</h1>;
	}
}


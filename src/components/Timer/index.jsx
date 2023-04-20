import React, { Component } from "react";
import { format, addSeconds } from "date-fns";

export default class Timer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: new Date(0, 0, 0, 0, 0, 0, 0),
		};

		this.timerId = null;
	}

	componentDidMount() {
		this.start();
	}

	componentWillUnmount() {
		this.stop();
	}

	start = () => {
		console.log("i am here");
		if (!this.timerId) {
			this.timerId = setInterval(() => {
				this.setState((state) => ({ count: addSeconds(state.count, 1) }));
			}, 1000);
		}
	};

	stop = () => {
		clearInterval(this.timerId);
		this.timerId = null;
	};

	render() {
		const { count } = this.state;

		return (
			<>
				<h1>{format(count, "HH:mm:ss")}</h1>
				<button onClick={this.start}>start</button>
				<button onClick={this.stop}>stop</button>
				<button>clear</button>
			</>
		);
	}
}


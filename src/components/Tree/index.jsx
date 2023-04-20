import React, { Component } from "react";

export default class Tree extends Component {
	constructor(props) {
		super(props);
		console.log("constructor");
		this.state = {
			checked: false,
		};
	}

	componentDidMount() {
		console.log("component did mount");
	}

	componentDidUpdate() {
		console.log("component did update");
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("should component update");
		//если возвр true - компонент требует обновления

		if (this.state.checked === nextState.checked) {
			return false;
		}

		return true;
	}

	onClickHandler = () => {
		this.setState({
			checked: !this.state.checked,
		});
	};

	render() {
		console.log("render");
		return <div onClick={this.onClickHandler}>tree</div>;
	}
}


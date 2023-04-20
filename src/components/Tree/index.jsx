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


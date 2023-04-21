import React, { Component } from "react";

export default class ToDoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toDoItem: "",
		};
	}

	submitHandler = (e) => {
		e.preventDefault();
		console.log(e.target.children[0].value);
	};

	changeHandler = (e) => {
		this.setState({
			toDoItem: e.target.value,
		});
	};

	render() {
		return (
			<>
				<form onSubmit={this.submitHandler}>
					<input
						type="text"
						value={this.state.toDoItem}
						onChange={this.changeHandler}
					/>
					<button>Submit</button>
				</form>
				<ul></ul>
			</>
		);
	}
}


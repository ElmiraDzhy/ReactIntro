import React, { Component } from "react";
import { format } from "date-fns";

export default class ToDoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toDoItem: "",
			isDone: false,
			time: new Date(0, 0, 0, 0, 0, 0, 0),
		};
	}

	submitHandler = (e) => {
		e.preventDefault();
		console.log(e.target.children[0].value);
	};

	generalHandler = ({ target }) => {
		switch (target.type) {
			case "text": {
				this.setState({
					toDoItem: target.value,
				});
				break;
			}

			case "checkbox": {
				this.setState(() => ({
					isDone: target.checked,
				}));
				break;
			}

			case "datetime-local": {
				this.setState({
					time: new Date(target.value),
				});
				break;
			}

			default:
		}
	};

	render() {
		const { toDoItem, time, isDone } = this.state;

		return (
			<>
				<form onSubmit={this.submitHandler}>
					<input
						name="toDoItem"
						type="text"
						value={toDoItem}
						onChange={this.generalHandler}
					/>

					<label>
						isDone?
						<input
							name="check"
							type="checkbox"
							checked={isDone}
							onChange={this.generalHandler}
						/>
					</label>

					<input
						name="time"
						type="datetime-local"
						value={format(time, "yyyy-MM-dd hh:mm")}
						onChange={this.generalHandler}
					/>
					<button>Submit</button>
				</form>
				<ul></ul>
			</>
		);
	}
}


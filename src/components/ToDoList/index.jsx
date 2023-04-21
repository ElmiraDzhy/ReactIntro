import React, { Component } from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";

export default class ToDoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todoList: [],
			isDoneProp: null,
		};
	}

	addNewItem = (data) => {
		const { todoList } = this.state;

		this.setState({
			todoList: [
				...todoList,
				{
					...data,
					id: todoList.length,
				},
			],
		});
	};

	changeIsDone = (isDone, id) => {
		const { todoList } = this.state;

		const newList = todoList.map((td) => {
			if (td.id === id) {
				td.isDone = isDone;
			}
			return td;
		});

		this.setState({
			todoList: newList,
		});
	};

	removeListItem = (id) => {
		const { todoList } = this.state;

		const newList = todoList.filter((td) => {
			if (td.id !== id) {
				return true;
			} else {
				return false;
			}
		});

		this.setState({
			todoList: newList,
		});
	};

	render() {
		const { todoList } = this.state;
		const liMap = todoList.map((todo) => {
			return todo.isRemoving ? null : (
				<ToDoItem
					data={todo}
					key={todo.id}
					callback={this.removeListItem}
					changeIsDone={this.changeIsDone}
				/>
			);
		});
		return (
			<>
				<ToDoForm callback={this.addNewItem} />
				<ul>{liMap}</ul>
			</>
		);
	}
}


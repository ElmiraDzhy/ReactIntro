import React, { Component } from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";

export default class ToDoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todoList: [],
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

	changeTextItem = (newText, id) => {
		const { todoList } = this.state;
		const newList = todoList.map((item) => {
			if (item.id === id) {
				item.todoItem = newText;
			}
			return item;
		});
		this.setState({
			todoList: newList,
		});
	};

	render() {
		const { todoList } = this.state;

		const liMap = todoList.map((todo) => (
			<ToDoItem
				data={todo}
				key={todo.id}
				removeListItem={this.removeListItem}
				changeIsDone={this.changeIsDone}
				changeText={this.changeTextItem}
			/>
		));

		return (
			<>
				<ToDoForm callback={this.addNewItem} />
				<ul>{liMap}</ul>
			</>
		);
	}
}


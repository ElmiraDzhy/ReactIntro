import React, { Component } from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";
import { getTime } from "date-fns";
import classNames from "classnames";
import styles from './ToDoList.module.css';

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
				item.toDoItem = newText;
			}
			return item;
		});
		this.setState({
			todoList: newList,
		});
	};

	sortList = () => {
		const { todoList } = this.state;
		const newList = [...todoList];
		newList.sort((a, b) => {
			return getTime(a.time) > getTime(b.time) ? 1 : -1;
    } );
    
    this.setState( {
      todoList: newList,
    })

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
			<div className={ styles.container }>
				<h1 className={styles.title}>To Do List</h1>
				<ToDoForm callback={this.addNewItem} />
				<button className={styles.btn} onClick={this.sortList}>SORT</button>
				<ul>{liMap}</ul>
			</div>
		);
	}
}


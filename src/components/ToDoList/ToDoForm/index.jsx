import React, { Component } from 'react';
import { format, isBefore } from 'date-fns';
import styles from './ToDoForm.module.css';
import classNames from 'classnames';
export default class ToDoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoItem: '',
      isDone: false,
      time: new Date(),
      isInputValid: true,
      isDataValid: true,
    };
  }

  submitHandler = e => {
    const { isDataValid, isInputValid } = this.state;
    e.preventDefault();
    if (isDataValid && isInputValid) {
      this.props.callback(this.state);
    } else {
      alert('Input valid data')
    }
  };

  generalHandler = ({ target }) => {
    switch (target.type) {
      case 'text': {
        if (target.value.includes(' ')) {
          this.setState({
            isInputValid: false,
          });
        } else {
          this.setState({
            isInputValid: true,
          })
        }

        this.setState({
          toDoItem: target.value,
        });
        break;
      }

      case 'checkbox': {
        this.setState(() => ({
          isDone: target.checked,
        }));
        break;
      }

      case 'datetime-local': {
        if (isBefore(new Date(target.value), new Date())) {
          this.setState({
            isDataValid: false,
          });
        } else {
          this.setState({
            isDataValid: true,
          })
        }

        this.setState({
          time: new Date(target.value),
        });
        break;
      }

      default:
    }
  };

  render() {
    const { toDoItem, time, isDone, isInputValid , isDataValid} = this.state;
    const className = classNames([styles.inputTodo], {
      [styles.inputInalid]: !isInputValid,
      [styles.inputValid]: isInputValid,
    } );
    const dataClassName = classNames(
      {[styles.dataInvalid]: !isDataValid,}
    )

    return (
      <>
        <form onSubmit={this.submitHandler} className={styles.container}>
          <input
            name="toDoItem"
            type="text"
            value={toDoItem}
            onChange={this.generalHandler}
            className={className}
            placeholder="What needs to be done?"
            autoFocus
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
            value={format(time, 'yyyy-MM-dd hh:mm')}
            onChange={ this.generalHandler }
            className={dataClassName}
          />
          <button className={styles.addBtn}>+</button>
        </form>
      </>
    );
  }
}

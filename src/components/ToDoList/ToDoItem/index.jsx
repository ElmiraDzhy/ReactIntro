import React from 'react';
import { format } from 'date-fns';
import styles from './ToDoItem.module.css';
import PropTypes from 'prop-types';

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };
  }
  onChange = e => {
    this.props.changeIsDone(e.target.checked, this.props.data.id);
  };

  onClick = () => {
    this.props.removeListItem(this.props.data.id);
  };

  changeView = () => {
    const { editMode } = this.state;
    this.setState({
      editMode: !editMode,
    });
  };

  bodyChangeHandler = ({ target: { value } }) => {
    const {
      changeText,
      data: { id },
    } = this.props;
    changeText(value, id);
  };

  render() {
    const {
      data: { isDone, time, toDoItem },
    } = this.props;

    const { editMode } = this.state;

    const body = editMode ? (
      <input value={toDoItem} onChange={this.bodyChangeHandler} />
    ) : (
      toDoItem
    );

    return (
      <li className={styles.container}>
        <input type="checkbox" checked={isDone} onChange={this.onChange} />
        <span>{body}</span> -<span>{format(time, 'yyyy-MM-dd hh:mm')}</span>
        <button className={styles.delBtn} onClick={this.onClick}>
          delete
        </button>
        <button onClick={this.changeView}>edit</button>
      </li>
    );
  }
}

const dataProp = {
  isDone: PropTypes.bool.isRequired,
  time: PropTypes.data.isRequired,
  toDoItem: PropTypes.string.isRequired,
};

ToDoItem.propTypes = {
  data: PropTypes.shape(dataProp).isRequired,
  changeIsDone: PropTypes.func.isRequired,
  removeListItem: PropTypes.func.isRequired,
  changeText: PropTypes.func.isRequired,
};

ToDoItem.defaultProps = {
  changeIsDone: () => {},
  removeListItem: () => {},
  changeText: () => {},
};

export default ToDoItem;

import React from "react";
import { format } from "date-fns";

class ToDoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editMode: false,
		};
	}
	onChange = (e) => {
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

  bodyChangeHandler = ( { target: { value } } ) => {
    const { changeText, data: { id } } = this.props;
    changeText( value, id );
  };



	render() {
		const {
			data: { isDone, time, toDoItem},
    } = this.props;
    
    const { editMode } = this.state;
    
		const body = editMode ? <input value={toDoItem} onChange={this.bodyChangeHandler}/> : toDoItem;

		return (
			
				<li>
					<input
						type="checkbox"
						checked={isDone}
						onChange={this.onChange}
          />
          
          <span>{body}</span> -
          <span>{format(time, "yyyy-MM-dd hh:mm")}</span>
				  <button onClick={this.onClick}>delete</button>
				  <button onClick={this.changeView}>edit</button>
			
					
				</li>
			
		);
	}
}

export default ToDoItem;


import React from "react";
import { format } from "date-fns";

function ToDoItem(props) {
	const {
    data: { isDone, time, toDoItem , id},
    callback,
    changeIsDone
  } = props;
  
  const onChange = ( e ) => {
    changeIsDone(!isDone, id)
  }

  const onClick = () => {
    callback(id)
  }
  return (
    <>
		<li>
			<input
				type="checkbox"
          checked={ isDone }
          onChange={ onChange}
			/>{" "}
			{toDoItem} - {format(time, "yyyy-MM-dd hh:mm")}
      </li>
      <button onClick={onClick}>delete</button>
      </>
	);
}

export default ToDoItem;


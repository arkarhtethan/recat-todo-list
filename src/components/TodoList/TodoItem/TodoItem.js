import React from "react";


const todoItem = (props) => {
	return (


		<div className="collection-item" onClick={props.deleteHandler} >

			<span> { props.todo.content } </span>

		</div>

	);
}

export default todoItem;
import React from "react";
import TodoItem from "./TodoItem/TodoItem";


const todoList = (props) => {

	const todos = props.todos.length ? 

		(

			props.todos.map(todo=>{
				return(

					<TodoItem todo={todo} 
					deleteHandler={() => props.deleteHandler(todo.id)}  
					key={todo.id}
					/>

				)
			})

		)

	: (<p className="center"> Your todo list is empty.</p>);

	return (
	
		<React.Fragment>

			<div className="todos collection">

				{ todos }

			</div>

		</React.Fragment>

	);
}

export default todoList;
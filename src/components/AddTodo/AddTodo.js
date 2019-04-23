import React, {Component} from "react";

class AddTodo extends Component {

	handleSubmit = (event) => {
		
		event.preventDefault();
	
		const todo = {id:Math.random(),content:event.target.todoInput.value};
	
		this.props.addTodo(todo);

		event.target.todoInput.value = "";

	}

	render() {

		return (

			<div>

				<form onSubmit={this.handleSubmit}>
			
					<input type="text" name="todoInput" placeholder="Add new todo" />
			
				</form>
			
			</div>

		)

	}

}

export default AddTodo;
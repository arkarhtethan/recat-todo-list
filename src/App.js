import React, {Component} from 'react';
import TodoList from "./components/TodoList/TodoList";
import "./assets/css/materialize.min.css"
import AddTodo from "./components/AddTodo/AddTodo"

class App extends Component {

  state = {
    todoItems : []
  };

  deleteTodoItem = (id) => {

    let todos = this.state.todoItems.filter((todo)=>{
 
      return todo.id !== id;
 
    });

    this.setState({todoItems:todos});

  }

  addTodo = (todo) => {
    let todos = [...this.state.todoItems,todo]
    this.setState({todoItems:todos})
  }


  render() {

    return (
    
      <div className="App container">

        <h1 className="center blue-text"> Simple Todo List </h1>

        <AddTodo addTodo={this.addTodo}/>
    
        <TodoList todos={this.state.todoItems} deleteHandler={this.deleteTodoItem} />
    
      </div>
    
    ); 
  }
}

export default App;

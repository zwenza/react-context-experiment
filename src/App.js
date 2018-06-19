import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoProvider, {TodoContext} from './components/TodoProvider'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoInput: null
    };
  }

  todoInputChanged = evt => {
    const input = evt.target.value
    this.setState(state => state.todoInput = input);
  }

  render() {
    return (
      <TodoProvider>
        <TodoContext.Consumer>
          {
            context => [
              <input type="text" value={this.state.todoInput} onChange={this.todoInputChanged} />,
              <button onClick={() => context.addTodo(this.state.todoInput)}>Add todo</button>,
              <TodoList />
            ]
          }
        </TodoContext.Consumer>
      </TodoProvider>
    );
  }
}

export default App;

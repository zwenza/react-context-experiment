import React, { Component } from 'react';

export const TodoContext = React.createContext();

export default class TodoProvider extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, text: 'Buy eggs', done: false },
        { id: 2, text: 'Buy milk', done: true }
      ],
      addTodo: this.addTodo,
      toggleTodo: this.toggleTodo
    };
  }

  addTodo = text => {
    this.setState(state =>
      state.todos.push({ id: state.todos.length + 2, text: text, done: false })
    );
  };

  toggleTodo = id => {
    this.setState(state => {
      const arrayIndex = state.todos.findIndex(todo => todo.id === id);
      if (arrayIndex !== -1) {
        state.todos[arrayIndex].done = !state.todos[arrayIndex].done;
      }
    });
  };

  render() {
    return (
      <TodoContext.Provider value={this.state}>
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

import React, { Component } from 'react';
import { TodoContext } from './TodoProvider';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    return (
      <TodoContext.Consumer>
        {context =>
          context.todos.map(item => (
            <TodoItem item={item} toggle={context.toggleTodo} />
          ))
        }
      </TodoContext.Consumer>
    );
  }
}

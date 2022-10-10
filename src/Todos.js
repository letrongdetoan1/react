import React, { Component } from 'react'
import TodoItem from './TodoItem'
export default class Todos extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => {
          return <TodoItem key={todo.id} todo={todo}
            handleCheckboxChange={this.props.handleCheckboxChange}
            deleteTodo={this.props.deleteTodo}
          ></TodoItem>
        }
        )}
      </ul>
    )
  }
}

import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    return (
      <div className='todo-item'>
        <input type="checkbox" name="" id=""
          onChange={() => { this.props.handleCheckboxChange(this.props.todo.id) }} checked={this.props.todo.completed} />
        <span className={this.props.todo.completed ? 'completed' : ''}>{this.props.todo.title}</span>
        <button className='btn-style' onClick={() => { this.props.deleteTodo(this.props.todo.id) }}> X </button>
      </div>
    )
  }
}

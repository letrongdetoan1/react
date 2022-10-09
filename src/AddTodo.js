import React, { Component } from 'react'

export default class AddTodo extends Component {
  state = {
    title: ""
  };
  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: ""
    });
  };
  onInputChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  render() {
    return (
      <form className="form-container" onSubmit={this.addTodo}>
        <input type="text" placeholder="Add Todo..." className="input-text" value={this.state.title}
          onChange={this.onInputChange} />
        <input type="submit" value="Submit" className="inputsubmit" />
      </form>
    )
  }
}

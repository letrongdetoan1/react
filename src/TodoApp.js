import React, { Component } from 'react'
import AddTodo from './AddTodo'
import Header from './Header'
import Todos from './Todos'
import './App.css'

export default class TodoApp extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    };

    addTodo = () => {

    }
    handleCheckboxChange = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo
            })
        })
    }

    deleteTodo = id => {
        this.setState({
            todos: [...this.state.todos.filter(todo => {
                return todo.id !== id
            })]
        })
    }
    render() {
        return (
            <div className='container'>
                <Header></Header>
                <AddTodo></AddTodo>
                <Todos todos={this.state.todos}
                    handleCheckboxChange={this.handleCheckboxChange}
                    deleteTodo={this.deleteTodo}
                ></Todos>
            </div>
        )
    }
}

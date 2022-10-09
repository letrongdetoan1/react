import React, { Component } from 'react'
import Header from './Header'
import './App.css'
import Todos from './Todos';
import AddTodo from './AddTodo';
import { v4 as uuidv4 } from 'uuid';

// console.log(uuid);
export default class TodoApp extends Component {
    addTodo = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };
    handleCheckboxChange = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };

    deleteTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    };
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
    render() {
        return (
            <div className='container'>
                <Header></Header>
                <AddTodo addTodo={this.addTodo}></AddTodo>
                <Todos todos={this.state.todos} handleChange={this.handleCheckboxChange}
                    deleteTodo={this.deleteTodo}
                ></Todos>
            </div>
        )
    }
}

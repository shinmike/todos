import React from 'react';
import { connect } from 'react-redux';

import { toggleTodos, crossTodo, deleteTodo } from '../actions';

import './List.css';

const List = (props) => {

    const handleArrowClick = (index, direction) => {
        props.toggleTodos(index, direction);
    }

    const handleTodoClick = (index, cross) => {
        props.crossTodo(index, cross);
    }

    const handleDeleteTodo = (index, cross) => {
        props.deleteTodo(index, cross);
    }

    return (
        <div className="list-group mt-3 pointer">
            <h3 className="text-center mb-3">Todos List</h3>
            {props.todos.map((todo, index) => {
                return (
                    <div className="list-group-item d-flex justify-content-between align-items-center" key={todo.id}>
                        <p className={todo.cross ? "mb-0 cross alert alert-warning" : "mb-0 alert alert-success"}
                            onClick={() => handleTodoClick(todo.id, todo.cross)}
                        >id: {todo.id}, title: {todo.title}</p>
                        <div className="d-flex">
                            <i className={todo.cross ? "fa fa-trash mx-1" : "mx-1"} onClick={() => handleDeleteTodo(todo.id, todo.cross)}></i>
                            <i className="fa fa-arrow-up mx-1" onClick={() => handleArrowClick(index, "up")}></i>
                            <i className="fa fa-arrow-down mx-1" onClick={() => handleArrowClick(index, "down")}></i>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { toggleTodos, crossTodo, deleteTodo })(List);
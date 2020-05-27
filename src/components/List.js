import React, { useState } from 'react';
import { connect } from 'react-redux';

import { toggleTodos, crossTodo, deleteTodo, editTodo, addEditedTodo } from '../actions';

import './List.css';

const List = (props) => {

    const [editedTodo, setEditedTodo] = useState("");

    const handleArrowClick = (index, direction) => {
        props.toggleTodos(index, direction);
    }

    const handleTodoClick = (index) => {
        props.crossTodo(index);
    }

    const handleDeleteTodo = (index, cross) => {
        props.deleteTodo(index, cross);
    }

    const handleEditTodo = (index) => {
        props.editTodo(index);
    }

    const handleEditedTodo = (e) => {
        setEditedTodo(e.target.value);
    }

    const handleEditedTodoSubmit = (todoObj, allTodos, e) => {
        e.preventDefault();
        props.addEditedTodo(editedTodo, todoObj, allTodos)
        setEditedTodo("");
    }

    return (
        <div className="list-group mt-3 pointer">
            <h3 className="text-center mb-3">Todos List</h3>
            {props.todos.map((todo, index) => {
                return (
                    <div className="list-group-item d-flex justify-content-between align-items-center" key={todo.id}>
                        {   todo.edit 
                            ? 
                            <form onSubmit={(e) => handleEditedTodoSubmit(todo, props.todos, e )}>
                                <input className="form-control" value={editedTodo} onChange={handleEditedTodo} />
                            </form>
                            : 
                            <p className={todo.cross ? "mb-0 cross alert alert-warning" : "mb-0 alert alert-success"}
                            onClick={() => handleTodoClick(todo.id, todo.cross)}
                            >id: {todo.id}, title: {todo.title}</p>
                        }
                        <div className="d-flex">
                            <i className="fa fa-edit mx-1" onClick={() => handleEditTodo(todo.id)}></i>
                            <i className={todo.cross ? "fa fa-trash mx-1" : ""} onClick={() => handleDeleteTodo(todo.id, todo.cross)}></i>
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

export default connect(mapStateToProps, { toggleTodos, crossTodo, deleteTodo, editTodo, addEditedTodo })(List);
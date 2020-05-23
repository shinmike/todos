// action creators

export const addTodo = (todo) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: Math.floor(Math.random() * 1000000),
            title: todo,
            cross: false
        }
    }
}

export const crossTodo = (todoIndex, cross) => {
    return (dispatch, getState) => {
        let state = getState();
        
        let updatedTodos = state.todos.map(todo => {
            if (todo.id === todoIndex) {
                todo.cross = !todo.cross;
            }
            return todo
        })

        dispatch({
            type: "CROSS_TODO",
            payload: updatedTodos
        })
    }
}

export const deleteTodo = (todoIndex, cross) => {
    return (dispatch, getState) => {
        let state = getState();

        let updatedTodos = [];

        // if todo is already crossed out, removed from list
        if (cross) {
            if (!window.confirm("Are you sure you want to delete this item?")) {
                return
            };

            updatedTodos = state.todos.filter(todo => {
                return todo.id !== todoIndex
            })
        }

        dispatch({
            type: "DELETE_TODO",
            payload: updatedTodos
        })
    }
}

export const toggleTodos = (todoIndex, direction) => {
    return (dispatch, getState) => {
        let state = getState();

        let reorderedTodos = {};

        let result = state.todos.filter((todo, i) => {
            if (i === todoIndex) {
                reorderedTodos = todo;
            }
            return i !== todoIndex
        });

        if (direction === "up") {
            if (todoIndex === 0) {
                return
            }
            result.splice(todoIndex - 1, 0, reorderedTodos);
        } else {
            result.splice(todoIndex + 1, 0, reorderedTodos);
        }

        dispatch({
            type: "TOGGLE_TODOS",
            payload: result
        })

    }
}
import { combineReducers } from 'redux';

const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [action.payload, ...state];
        case "TOGGLE_TODOS":
            return action.payload
        case "CROSS_TODO":
            return action.payload
        case "DELETE_TODO":
            return action.payload
        default:
            return state;
    }
}

export default combineReducers({
    todos
})
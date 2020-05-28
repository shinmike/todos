import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

const Add = (props) => {

    const [term, setTerm] = useState("")

    const handleInputChange = (e) => {
        setTerm(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (term.length > 0){
            props.addTodo(term);
            setTerm("");
        } else {
            alert("write something")
        }
    }

    return (
        <div>
            <form className="form-group mt-3" onSubmit={handleFormSubmit}>
                <label>Add Todo</label>
                <input
                    className="form-control"
                    value={term}
                    onChange={handleInputChange}
                />
            </form>
        </div>
    )


}

export default connect(null, { addTodo })(Add);
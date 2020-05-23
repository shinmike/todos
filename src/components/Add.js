import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

class Add extends Component {

    state = {
        term: ""
    }

    handleInputChange = (e) => {
        this.setState({
            term: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.term);
        this.setState({
            term: ""
        })
    }

    render() {
        return (
            <div>
                <form className="form-group mt-3" onSubmit={this.handleFormSubmit}>
                    <label>Add Todo</label>
                    <input
                        className="form-control"
                        value={this.state.term}
                        onChange={this.handleInputChange}
                    />
                </form>
            </div>
        )
    }


}

export default connect(null, { addTodo })(Add);
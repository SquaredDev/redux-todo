import React, {Component} from 'react';
import {addTodo} from '../actions/todo'

class TodoForm extends React.Component {
  state = {
    value: ''
  }

  handleSumbit = (e) =>  {
    e.preventDefault()
    addTodo(this.state.value)
    this.setState({
      value :''
    })
  }

  handleChange = (e) => {
    this.setState ({
      [e.target.name]:e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSumbit} >
        <input onChange={this.handleChange} type="text" value={this.state.value} placeholder="Enter a To Do" name="value" />
        <button type="submit">Save To Do</button>
      </form>
    );
  }
}

export default TodoForm

import React, {Component} from 'react';
import {removeTodo, completedTodo, uncompletedTodo} from '../actions/todo'

class TodoItem extends Component {
  complete = (e) => {
    if (this.props.status === 'pending') {
    completedTodo(this.props.id)
  } else {
    uncompletedTodo(this.props.id)
    }
  }
  remove = (e) => {
    removeTodo (this.props.id)
  }

  render() {
    return (
      <li className={this.props.status} >
        <input type="checkbox" onClick={this.complete} />
        {this.props.text} <button onClick={this.remove}>Remove</button>
      </li>
    );
  }
}
export default TodoItem

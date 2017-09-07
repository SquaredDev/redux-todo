import React, {Component} from 'react';
import {removeTodo} from '../actions/todo'

class TodoItem extends Component {

  handleClick = (e) => {
    removeTodo (this.props.id)
  }

  render() {
    return (
      <li>
        {this.props.text} <button onClick={this.handleClick}>Remove</button>
      </li>
    );
  }
}
export default TodoItem

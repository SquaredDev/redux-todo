import React, {Component} from 'react';
import {connect} from 'react-redux'

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>

            {this.props.todos.map(todo =>
              <li key={todo.id}>{todo.text}</li>
            )}
          </ul>

      </div>
    );
  }
}

function mapStateToProps(appState) {
  return {
    todos: appState.todos
  }
}

export default connect(mapStateToProps)(TodoList)

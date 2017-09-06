import React, { Component } from 'react';
import '../styles/App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList'
import {Provider} from 'react-redux';
import store from '../stores'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoForm />
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;

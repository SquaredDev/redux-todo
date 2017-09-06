import store from '../stores'
import shortid from 'shortid'

export function addTodo(text) {
  store.dispatch({
    type: 'ADD_TODO',
    todo: {
      text:text,
      id: shortid.generate(),
      status: 'pending'
    }
  })
}
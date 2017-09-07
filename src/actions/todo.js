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

export function removeTodo(id) {
  store.dispatch({
    type: 'REMOVE_TODO',
    id: id
  })

}

export function completedTodo(id) {
  store.dispatch({
    type: 'COMPLETED_TODO',
    id: id
  })
};

export function uncompletedTodo(id) {
  store.dispatch({
    type: 'UNCOMPLETED_TODO',
    id: id
  })
};

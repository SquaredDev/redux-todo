const intialState = {
  todos: []
}

export default function(state = intialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos:[action.todo, ...state.todos] }
    case 'REMOVE_TODO':
      return {...state, todos: state.todos.filter(todo => todo.id !== action.id)}
    case 'COMPLETED_TODO':
      return {...state, todos: state.todos.map(todo => {
        if (todo.id === action.id) {
          return {...todo, status: 'completed'}
        } else {
          return todo}
      })}
    case 'UNCOMPLETED_TODO':
      return {...state, todos: state.todos.map(todo => {
        if (todo.id === action.id) {
          return {...todo, status: 'pending'}
        } else {
          return todo}
        })}
    default:
        return state

  }
}

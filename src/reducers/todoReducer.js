const intialState = {
  todos: []
}

export default function(state = intialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos:[action.todo, ...state.todos] }
    case 'REMOVE_TODO':
      return {...state, todos: state.todos.filter(todo => todo.id !== action.id)}
    default:
        return state

  }
}

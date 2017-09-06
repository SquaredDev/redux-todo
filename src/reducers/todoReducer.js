const intialState = {
  todos: []
}

export default function(state = intialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos:[action.todo, ...state.todos] }
      default:
        return state

  }
}

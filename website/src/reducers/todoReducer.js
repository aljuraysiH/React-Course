export const initalState = {
  todos: [
    {
      name: 'Buy Food',
      id: (new Date() + Math.random()).toString(),
    },
    {
      name: 'Sleep',
      id: (new Date() + Math.random()).toString(),
    },
  ],
};

export const todoReducer = (state, action) => {
  if (action.type === 'CREATE_TODO') {
    return { ...state, todos: state.todos.push(action.payload) };
  }
  if (action.type === 'DELETE_TODO') {
    const newTodos = state.todos.filter(
      (todo) => todo.id !== action.payload.id
    );
    return { ...state, todos: newTodos };
  }
};

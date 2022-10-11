export const initialState = {
  user: '',
  isLoading: false,
};

export const userReducer = (state, action) => {
  if (action.type === 'LOGIN') {
    localStorage.setItem('user', 'LOGIN');
    return { ...state, user: 'Login' };
  }
  if (action.type === 'LOGOUT') {
    localStorage.removeItem('user');
    return { ...state, user: '' };
  }
};

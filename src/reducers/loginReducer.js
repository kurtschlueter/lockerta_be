import {
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGIN_FAILURE,
  PASSWORD_CHANGE,
  USERNAME_CHANGE,
  RESET_FORM
} from '../actions/actionTypes';

// Login Reducers
export default function loginReducer(state = {
  isAuthenticated: localStorage.getItem('token') ? true : false,
  token: '',
  name: '',
  username: '',
  password: '',
  loginError: false
}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.token);
      localStorage.setItem('name', action.name);
      return Object.assign({}, state, {
        isAuthenticated: true,
        name: action.name,
        token: action.token,
        loginError: false
      });
    case LOGOUT_REQUEST:
      localStorage.removeItem('token');
      return Object.assign({}, state, {
        isAuthenticated: false,
        name: '',
        token: '',
        loginError: false
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isAuthenticated: false,
        errorMessage: action.message,
        username: state.username,
        password: '',
        loginError: true
      });
    case PASSWORD_CHANGE:
      return Object.assign({}, state, {
        loginError: false,
        password: action.password
      });
    case USERNAME_CHANGE:
      return Object.assign({}, state, {
        loginError: false,
        username: action.username
      });
    case RESET_FORM:
      return Object.assign({}, state, {
        loginError: false,
      });
    default:
      return state;
  }
}

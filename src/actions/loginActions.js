import * as loginApi from './../api/loginApi';

import {
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGIN_FAILURE,
  USERNAME_CHANGE,
  PASSWORD_CHANGE,
  RESET_FORM
  } from './actionTypes';

export function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isAuthenticated: false,
    loginError: true,
    message
  };
}


export function receiveLogin(token) {
  return {
    type: LOGIN_SUCCESS,
    isAuthenticated: true,
    token: token.token,
    name: token.name
  };
}

export const requestLogin = creds => (dispatch) => {
  loginApi.login(creds).subscribe(
    (data) => {
      if (data) {
        dispatch(receiveLogin(data));
      }
    },
    (error) => {
      dispatch(loginError(`Error authenticating ${error}`));
    },
    () => {
    });
};

export function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isAuthenticated: false,
    token: '',
    name: ''
  };
}

export function usernameChange(usernameValue) {
  return {
    type: USERNAME_CHANGE,
    username: usernameValue
  };
}

export function passwordChange(passwordValue) {
  return {
    type: PASSWORD_CHANGE,
    password: passwordValue
  };
}

export function resetForm() {
  return {
    type: RESET_FORM
  };
}

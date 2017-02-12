import {
  GET_ACCOUNT_MANAGERS,
  POST_ACCOUNT_MANAGER,
  PUT_ACCOUNT_MANAGER,
  DELETE_ACCOUNT_MANAGER,
  SHOW_NEW_MANAGER_BUTTON,
  SHOW_NEW_MANAGER_VIEW,
  HIDE_NEW_MANAGER_VIEW
} from '../actions/actionTypes.js';

import Constants from '../utils/localConstants';

const defaultState = {
  showNewManagerButton: false,
  showNewManagerView: false,
  showListView: false,
  success: null
}

export default function managerReducer(state = { managers: [], ...defaultState }, action) {
  switch (action.type) {
    case GET_ACCOUNT_MANAGERS:
      {
        return {
          ...state,
          ...defaultState,
          showListView: true,
          managers: action.data,
          showNewManagerButton: true
        }
      }
    case POST_ACCOUNT_MANAGER:
      {
        return {
          ...state,
          success: Constants.create
        };
      }
    case PUT_ACCOUNT_MANAGER:
      {
        return {
          ...state,
          success: Constants.save
        };
      }
    case DELETE_ACCOUNT_MANAGER:
      {
        return {
          ...state,
          success: Constants.delete
        };
      }
    case SHOW_NEW_MANAGER_VIEW:
      {
        return {
          ...state,
          ...defaultState,
          showNewManagerView: true,
        }
      }
    case HIDE_NEW_MANAGER_VIEW:
      {
        return {
          ...state,
          ...defaultState,
          showListView: true,
          showNewManagerButton: true
        }
      }
    default:
      {
        return state;
      }
  }
}

//Selectors
export const getManagers = (state) => {
  return state.managers;
}

export const postManager = (state) => {
  return state.managers;
}

export const deleteManager = (state) => {
  return state.managers;
}

export const putManager = (state) => {
  return state.managers;
}

import {
  GET_SPECIALISTS,
  POST_SPECIALIST,
  PUT_SPECIALIST,
  DELETE_SPECIALIST,
  SHOW_NEW_SPECIALIST_BUTTON,
  SHOW_NEW_SPECIALIST_VIEW
} from '../actions/actionTypes.js';

import Constants from '../utils/localConstants';

const defaultState = {
  showNewSpecialistButton: false,
  showNewSpecialistView: false,
  showListView: false,
  success: null
};

export default function specialistReducer(state = { specialists: [], ...defaultState }, action) {
  switch (action.type) {
    case GET_SPECIALISTS:
      {
        return {
          ...state,
          ...defaultState,
          showListView: true,
          specialists: action.data,
          showNewSpecialistButton: true
        };
      }
    case POST_SPECIALIST:
      {
        return {
          ...state,
          success: Constants.create
        };
      }
    case PUT_SPECIALIST:
      {
        return {
          ...state,
          success: Constants.save
        };
      }
    case DELETE_SPECIALIST:
      {
        return {
          ...state,
          success: Constants.delete
        };
      }
    case SHOW_NEW_SPECIALIST_BUTTON:
      {
        return {
          ...state,
          ...defaultState,
          showNewSpecialistView: true,
        };
      }
    case SHOW_NEW_SPECIALIST_VIEW:
      {
        return {
          ...state,
          ...defaultState,
          showListView: true,
          showNewSpecialistButton: true
        };
      }
    default:
      {
        return state;
      }
  }
}

//Selectors
export const getSpecialists = (state) => {
  return state.specialists;
};

export const postSpecialist = (state) => {
  return state.specialists;
};

export const deleteSpecialist = (state) => {
  return state.specialists;
};

export const putSpecialist = (state) => {
  return state.specialists;
};

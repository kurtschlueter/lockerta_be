import {
  HIDE_NEW_MANAGER_BUTTON,
  SHOW_NEW_MANAGER_BUTTON,
  HIDE_NEW_CLIENT_BUTTON,
  SHOW_NEW_CLIENT_BUTTON,
  HIDE_NEW_REVIEW_BUTTON,
  SHOW_NEW_REVIEW_BUTTON
} from '../actions/actionTypes';

export default function navbarReducer(state = { showNewManagerButton: false, showNewClientButton: false }, action) {
  switch (action.type) {
    case HIDE_NEW_MANAGER_BUTTON:
      {
        return {
          ...state,
          showNewManagerButton: false
        };
      }
    case SHOW_NEW_MANAGER_BUTTON:
      {
        return {
          ...state,
          showNewManagerButton: true,
          showNewClientButton: false
        };
      }
    case HIDE_NEW_CLIENT_BUTTON:
      {
        return {
          ...state,
          showNewClientButton: false
        };
      }
    case SHOW_NEW_CLIENT_BUTTON:
      {
        return {
          ...state,
          showNewClientButton: true,
          showNewManagerButton: false,
          showNewReviewButton: false
        };
      }
    case HIDE_NEW_REVIEW_BUTTON:
      {
        return {
          ...state,
          showNewReviewButton: false
        };
      }
    case SHOW_NEW_REVIEW_BUTTON:
      {
        return {
          ...state,
          showNewReviewButton: true,
          showNewManagerButton: false,
          showNewClientButton: false
        };
      }
    default:
      return state;
  }
}

import {
  SHOW_MODAL,
  CONFIRMED,
  NO_MODAL
} from '../actions/actionTypes';

const defaultState = {
  modal: null,
  isConfirmed: false,
  done: false
};

export default function modalReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        ...defaultState,
        modal: action.data,
        isConfirmed: action.data.isConfirmed
      };
    case CONFIRMED:
      return {
        ...state,
        ...defaultState,
        isConfirmed: true
      };
    case NO_MODAL:
      return {
        ...state,
        ...defaultState,
        done: true
      };
    default:
      return state;
  }
}

import {
  GET_AGENCIES
} from '../actions/actionTypes.js';

export default function managerReducer(state = { agencies: [] }, action) {
  switch (action.type) {
    case GET_AGENCIES:
      {
        return {
          ...state,
          agencies: action.data
        };
      }
    default:
      {
        return state;
      }
  }
}

// Selectors
export const getAgencies = (state) => {
  return state.agencies;
};

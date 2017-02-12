import { GET_PROFILE, UPDATE_PROFILE_SUCCESS } from '../actions/actionTypes.js';

export default function profileReducer(state = { profile: {} }, action) {
  switch (action.type) {
    case GET_PROFILE:
      {
        return Object.assign({}, state, { 
          profile: action.data,
          isSaved: false
           } );
      }
    case UPDATE_PROFILE_SUCCESS:
      {
        return Object.assign({}, state, { 
          profile: action.data,
          isSaved: true
        } );
      }
    default:
      {
        return state;
      }
  }
}

//Selectors
export const getProfile = (state) => {
  return state.profile;
}

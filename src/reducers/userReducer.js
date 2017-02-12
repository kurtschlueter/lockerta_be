import { GET_USERS } from '../actions/actionTypes.js';
export default function userReducer(state = { users: [] }, action) {
  console.log('WTF is thies', state)
  switch (action.type) {
    case GET_USERS:
      {
        console.log('users', action.data)
        return action.data.length > 0 ? (
          {
            ...state,
            users: action.data,
            hasUsers: true
          }
        ) : (
          {
            ...state,
            users: action.data,
            hasUsers: false
           }
        )
      }
    default:
      {
        return state;
      }
  }
}

//Selectors
export const getUsers = (state) => {
  return state.users;
}

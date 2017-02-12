import { GET_USERS } from './actionTypes';
import * as userApi from '../api/userApi';

export function getUsers(data) {
  return {
    type: GET_USERS,
    data
  };
}

export const fetchUsers = (filters, offset, limit) => (dispatch) => {
  clientApi.getClients(client).subscribe(
    (data) => {
      dispatch(getUsers(data));
    },
    (error) => {
      console.log('parsing failed', error);
    },
    () => {}
  );
};


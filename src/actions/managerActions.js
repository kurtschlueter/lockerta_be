import {
  GET_ACCOUNT_MANAGERS,
  POST_ACCOUNT_MANAGER,
  PUT_ACCOUNT_MANAGER,
  DELETE_ACCOUNT_MANAGER,
  SHOW_NEW_MANAGER_VIEW,
  HIDE_NEW_MANAGER_VIEW,
  CLEAR_SUCCESS
} from './actionTypes';
import * as managerApi from '../api/managerApi';

export function getAccountManagers(data) {
  return {
    type: GET_ACCOUNT_MANAGERS,
    data
  };
}

export const fetchAccountManagers = (options) => (dispatch) => {
  managerApi.getAccountManagers(options).subscribe(
    (data) => {
      dispatch(getAccountManagers(data));
    },
    (error) => {
      console.log('parsing failed', error);
    },
    () => {}
  );
};

export function postAccountManager(data) {
  return {
    type: POST_ACCOUNT_MANAGER,
    data: { name: data.name, email: data.email, phone: data.phone }
  };
}

export const requestPostAccountManager = (manager) => (dispatch) => {
  return new Promise((resolve, reject) => {
    managerApi.postAccountManager(manager).subscribe(
      (data) => {
        if (data) {
          dispatch(postAccountManager(data));
        }
        resolve();
      },
      (error) => {
        reject(error);
      },
      () => {}
    );
  });
};
export function putAccountManager(data) {
  return {
    type: PUT_ACCOUNT_MANAGER,
    data: { name: data.name, email: data.email, phone: data.phone }
  };
}

export const requestPutAccountManager = (manager) => (dispatch) => {
  return new Promise((resolve, reject) => {
    managerApi.putAccountManager(manager).subscribe(
      (data) => {
        if (data) {
          dispatch(putAccountManager(data));
        }
        resolve();
      },
      (error) => {
        reject(error);
      },
      () => {}
    );
  });
};
export function deleteAccountManager(data) {
  return {
    type: DELETE_ACCOUNT_MANAGER,
    data: { name: data.name, email: data.email, phone: data.phone }
  };
}

export const requestDeleteAccountManager = (manager) => (dispatch) => {
  return new Promise((resolve, reject) => {
    managerApi.deleteAccountManager(manager).subscribe(
      (data) => {
        if (data) {
          dispatch(deleteAccountManager(data));
        }
        resolve();
      },
      (error) => {
        console.log('will delete account manager error', error);
        reject(error);
      },
      () => {}
    );
  });
};

export function showNewManagerView() {
  return {
    type: SHOW_NEW_MANAGER_VIEW
  }
}
export function hideNewManagerView() {
  return {
    type: HIDE_NEW_MANAGER_VIEW
  }
}
export function clearSuccess() {
  return {
    type: CLEAR_SUCCESS
  }
}

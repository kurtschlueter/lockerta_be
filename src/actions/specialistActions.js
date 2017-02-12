import {
  GET_SPECIALISTS,
  POST_SPECIALIST,
  PUT_SPECIALIST,
  DELETE_SPECIALIST,
  SHOW_NEW_SPECIALIST_VIEW,
  HIDE_NEW_SPECIALIST_VIEW,
  CLEAR_SUCCESS
} from './actionTypes';
import * as specialistApi from '../api/specialistApi';

export function getSpecialists(data) {
  return {
    type: GET_SPECIALISTS,
    data
  };
}

export const fetchSpecialists = (options) => (dispatch) => {
  specialistApi.getSpecialists(options).subscribe(
    (data) => {
      dispatch(getSpecialists(data));
    },
    (error) => {
      console.log('parsing failed', error);
    },
    () => {}
  );
};

export function postSpecialist(data) {
  return {
    type: POST_SPECIALIST,
    data: { name: data.name, email: data.email, phone: data.phone }
  };
}

export const requestPostSpecialist = (specialist) => (dispatch) => {
  return new Promise((resolve, reject) => {
    specialistApi.postAccountManager(specialist).subscribe(
      (data) => {
        if (data) {
          dispatch(postSpecialist(data));
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
export function putSpecialist(data) {
  return {
    type: PUT_SPECIALIST,
    data: { name: data.name, email: data.email, phone: data.phone }
  };
}

export const requestPutSpecialist = (specialist) => (dispatch) => {
  return new Promise((resolve, reject) => {
    specialistApi.putSpecialist(specialist).subscribe(
      (data) => {
        if (data) {
          dispatch(putSpecialist(data));
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
export function deleteSpecialist(data) {
  return {
    type: DELETE_SPECIALIST,
    data: { name: data.name, email: data.email, phone: data.phone }
  };
}

export const requestDeleteSpecialist = (specialist) => (dispatch) => {
  return new Promise((resolve, reject) => {
    specialistApi.deleteAccountManager(specialist).subscribe(
      (data) => {
        if (data) {
          dispatch(deleteSpecialist(data));
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

export function showNewSpecialistView() {
  return {
    type: SHOW_NEW_SPECIALIST_VIEW
  };
}
export function hideNewSpecialistiew() {
  return {
    type: HIDE_NEW_SPECIALIST_VIEW
  };
}
export function clearSuccess() {
  return {
    type: CLEAR_SUCCESS
  };
}

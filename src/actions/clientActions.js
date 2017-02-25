import {
  GET_SCHOOLS,
  GET_SCHOOL,
  SET_SCHOOL,
  POST_CLIENT,
  PUT_SCHOOL,
  DELETE_CLIENT,
  SHOW_IMPORT_CSV,
  HIDE_IMPORT_CSV,
  UPLOAD_CSV_SUCCESS,
  UPLOAD_CSV_ERROR,
  SET_DETAIL_VIEW
} from './actionTypes';

import * as clientApi from './../api/clientApi';

export function getSchools(data) {
  // console.log('getSchools actions data', data)
  return {
    type: GET_SCHOOLS,
    data
  };
}

export const fetchSchools = (filters, offset, limit) => (dispatch) => {
  // console.log('fetch schools')

  clientApi.getSchools().subscribe(
    (data) => {
      dispatch(getSchools(data));
    },
    (error) => {
      console.log('parsing failed', error);
    },
    () => {}
  );
};

export function getSchool(data) {
  // console.log('get school action', data)
  return {
    type: GET_SCHOOL,
    data
  };
}

export const fetchSchool = (id) => (dispatch) => {
  // console.log('fetchSchool action', id)
  clientApi.getSchool(id).subscribe(
    (data) => {
      dispatch(getSchool(data[0]));
    },
    (error) => {
      console.log('parsing failed', error);
    },
    () => {}
  );
};


export function postClient(data) {
  return {
    type: POST_CLIENT,
    data
  };
}

export const requestPostClient = (client) => (dispatch) => {
  return new Promise((resolve, reject) => {
    clientApi.postClient(client).subscribe(
      (data) => {
        if (data) {
          dispatch(postClient(data));
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

export function setSchool(data) {
  // console.log('data setClient', data)
  return {
    type: SET_SCHOOL,
    data
  }
};

export function putSchool(data) {

  return {
    type: PUT_SCHOOL,
    data
  };
};

export const requestPutSchool = (school) => (dispatch) => {
  return new Promise((resolve, reject) => {
    clientApi.putSchool(school).subscribe(
      (data) => {
        if (data) {
          dispatch(putSchool(data));
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

export function deleteClient(data) {
  return {
    type: DELETE_CLIENT,
    data: {
      name: data.name,
      type: data.type,
      phone: data.phone,
      address: data.address,
      zipCode: data.zipCode,
      city: data.city,
      state: data.state,
      managerId: data.managerId
    }
  };
}

export function uploadCSVSuccess(data) {
  return {
    type: UPLOAD_CSV_SUCCESS,
    data
  }
}

export function uploadCSVError(error) {
  return {
    type: UPLOAD_CSV_ERROR,
    error
  }
}

export const requestUploadCSV = (json) => (dispatch) => {
  clientApi.uploadCSVFiles(json).subscribe(
    (data) => {
      dispatch(uploadCSVSuccess(data))
    },
    (error) => {
      dispatch(uploadCSVError(error))
    }
  )
}

export function showImportCSV() {
  return {
    type: SHOW_IMPORT_CSV
  }
}

export function hideImportCSV() {
  return {
    type: HIDE_IMPORT_CSV
  }
}
export const requestDeleteClient = (client) => (dispatch) => {
  return new Promise((resolve, reject) => {
    clientApi.deleteClient(client).subscribe(
      (data) => {
        if (data) {
          dispatch(deleteClient(data));
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

export function setDetailView(data) {
  console.log('in set detail view ')
  return {
    type: SET_DETAIL_VIEW,
    data
  }
};


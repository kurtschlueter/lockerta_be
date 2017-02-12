import {
  GET_CLIENTS,
  GET_CLIENT,
  SET_CLIENT,
  POST_CLIENT,
  PUT_CLIENT,
  DELETE_CLIENT,
  SHOW_IMPORT_CSV,
  HIDE_IMPORT_CSV,
  UPLOAD_CSV_SUCCESS,
  UPLOAD_CSV_ERROR
} from './actionTypes';

import * as clientApi from './../api/clientApi';

export function getClients(data) {
  return {
    type: GET_CLIENTS,
    data
  };
}

export const fetchClients = (filters, offset, limit) => (dispatch) => {
  clientApi.getClients().subscribe(
    (data) => {
      dispatch(getClients(data));
    },
    (error) => {
      console.log('parsing failed', error);
    },
    () => {}
  );
};

export function getClient(data) {
  return {
    type: GET_CLIENT,
    data
  };
}

export const fetchClient = (id) => (dispatch) => {
  clientApi.getClient(id).subscribe(
    (data) => {
      dispatch(getClient(data));
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

export function setClient(data) {
  return {
    type: SET_CLIENT,
    data
  }
};

export function putClient(data) {

  return {
    type: PUT_CLIENT,
    data
  };
};

export const requestPutClient = (client) => (dispatch) => {
  return new Promise((resolve, reject) => {
    clientApi.putClient(client).subscribe(
      (data) => {
        if (data) {
          dispatch(putClient(data));
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

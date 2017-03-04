import {
  GET_SCHOOLS,
  GET_SCHOOL,
  SET_SCHOOL,
  POST_SCHOOL,
  PUT_SCHOOL,
  DELETE_SCHOOL,
  SHOW_IMPORT_CSV,
  HIDE_IMPORT_CSV,
  UPLOAD_CSV_SUCCESS,
  UPLOAD_CSV_ERROR,
  SET_DETAIL_VIEW,
  SEARCH_SCHOOLS,
  GET_SCHOOL_PROGRAMS
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

export function getSchoolPrograms(data) {
  console.log('get school programs $$$$$$$$ action', data)

  // console.log('get school action', data)
  return {
    type: GET_SCHOOL_PROGRAMS,
    data
  };
}

export const fetchSchoolPrograms = (id) => (dispatch) => {
  console.log('fetch school programs $$$$$$$$ action', id)
  clientApi.getSchoolPrograms(id).subscribe(
    (data) => {
      dispatch(getSchoolPrograms(data));
    },
    (error) => {
      console.log('parsing failed', error);
    },
    () => {}
  );
};

export function getSearchedSchools(data) {
  // console.log('get school action', data)
  return {
    type: GET_SCHOOLS,
    data
  };
}

export const searchSchools = (query) => (dispatch) => {
  // console.log('fetchSchool action', query)
  clientApi.getSearchedSchools(query).subscribe(
    (data) => {
      dispatch(getSearchedSchools(data));
    },
    (error) => {
      console.log('parsing failed', error);
    },
    () => {}
  );
};

export function getSearchedSchoolPrograms(data) {
  // console.log('get school action', data)
  return {
    type: GET_SCHOOL_PROGRAMS,
    data
  };
}

export const searchSchoolPrograms = (id, query) => (dispatch) => {
  // console.log('fetchSchool action', query)
  clientApi.getSearchedSchoolPrograms(id, query).subscribe(
    (data) => {
      dispatch(getSearchedSchoolPrograms(data));
    },
    (error) => {
      console.log('parsing failed', error);
    },
    () => {}
  );
};


export function postSchool(data) {
  return {
    type: POST_SCHOOL,
    data
  };
}

export const requestPostSchool = (school) => (dispatch) => {
  return new Promise((resolve, reject) => {
    clientApi.postSchool(school).subscribe(
      (data) => {
        if (data) {
          dispatch(postSchool(data));
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

export function deleteSchool(data) {
  return {
    type: DELETE_SCHOOL,
    data
  };
}

export const requestDeleteSchool = (school) => (dispatch) => {
  return new Promise((resolve, reject) => {
    clientApi.deleteSchool(school).subscribe(
      (data) => {
        if (data) {
          dispatch(deleteSchool(data));
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


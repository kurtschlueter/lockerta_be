import {
  GET_REVIEWS,
  GET_REVIEW,
  SET_REVIEW,
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
  SET_REVIEW_DETAIL_VIEW
} from './actionTypes';

import * as reviewApi from './../api/reviewApi';

export function getSchools(data) {
  // console.log('getSchools actions data', data)
  return {
    type: GET_SCHOOLS,
    data
  };
}

export const fetchSchools = (filters, offset, limit) => (dispatch) => {
  // console.log('fetch schools')

  reviewApi.getSchools().subscribe(
    (data) => {
      dispatch(getSchools(data));
    },
    (error) => {
      console.log('parsing failed', error);
    },
    () => {}
  );
};

export function getReviews(data) {
  // console.log('getSchools actions data', data)
  return {
    type: GET_REVIEWS,
    data
  };
}

export const fetchReviews = (filters, offset, limit) => (dispatch) => {
  console.log('fetch reviews')

  reviewApi.getReviews().subscribe(
    (data) => {
      dispatch(getReviews(data));
    },
    (error) => {
      console.log('parsing failed', error);
    },
    () => {}
  );
};

export function getReview(data) {
  // console.log('get school action', data)
  return {
    type: GET_REVIEW,
    data
  };
}

export const fetchReview = (id) => (dispatch) => {
  // console.log('fetchSchool action', id)
  reviewApi.getReview(id).subscribe(
    (data) => {
      dispatch(getReview(data[0]));
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
  reviewApi.getSearchedSchools(query).subscribe(
    (data) => {
      dispatch(getSearchedSchools(data));
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
    reviewApi.postSchool(school).subscribe(
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

export function setReview(data) {
  // console.log('data setClient', data)
  return {
    type: SET_REVIEW,
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
    reviewApi.putSchool(school).subscribe(
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
    reviewApi.deleteSchool(school).subscribe(
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
  reviewApi.uploadCSVFiles(json).subscribe(
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
  reviewApi.getClients(client).subscribe(
    (data) => {
      dispatch(getUsers(data));
    },
    (error) => {
      console.log('parsing failed', error);
    },
    () => {}
  );
};

export function setReviewDetailView(data) {
  console.log('in set detail view reviews')
  return {
    type: SET_REVIEW_DETAIL_VIEW,
    data
  }
};


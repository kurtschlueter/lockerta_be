import {
  GET_PROGRAMS,
  GET_PROGRAM,
  SET_PROGRAM,
  POST_PROGRAM,
  PUT_PROGRAM,
  DELETE_PROGRAM,
  GET_PROGRAM_REVIEWS
} from './actionTypes';

import * as programApi from './../api/programApi';

export function getPrograms(data) {
  // console.log('getSchools actions data', data)
  return {
    type: GET_PROGRAMS,
    data
  };
}

export const fetchPrograms = (filters, offset, limit) => (dispatch) => {
  console.log('fetch programs')

  programApi.getPrograms().subscribe(
    (data) => {
      dispatch(getPrograms(data));
    },
    (error) => {
      console.log('parsing failed', error);
    },
    () => {}
  );
};

export function getProgram(data) {
  // console.log('get school action', data)
  return {
    type: GET_PROGRAM,
    data
  };
}

export const fetchProgram = (id) => (dispatch) => {
  // console.log('fetchSchool action', id)
  programApi.getProgram(id).subscribe(
    (data) => {
      dispatch(getProgram(data[0]));
    },
    (error) => {
      console.log('parsing failed', error);
    },
    () => {}
  );
};

export function getProgramReviews(data) {
  console.log('get program reviews $$$$$$$$ action', data)

  // console.log('get school action', data)
  return {
    type: GET_PROGRAM_REVIEWS,
    data
  };
}

export const fetchProgramReviews = (id) => (dispatch) => {
  console.log('fetch program reviews $$$$$$$$ action', id)
  programApi.getProgramReviews(id).subscribe(
    (data) => {
      dispatch(getProgramReviews(data));
    },
    (error) => {
      console.log('parsing failed', error);
    },
    () => {}
  );
};

export function getSearchedPrograms(data) {
  // console.log('get school action', data)
  return {
    type: GET_PROGRAMS,
    data
  };
}

export const searchPrograms = (query) => (dispatch) => {
  // console.log('fetchSchool action', query)
  programApi.getSearchedPrograms(query).subscribe(
    (data) => {
      dispatch(getSearchedPrograms(data));
    },
    (error) => {
      console.log('parsing failed', error);
    },
    () => {}
  );
};

export function getSearchedProgramReviews(data) {
  // console.log('get school action', data)
  return {
    type: GET_PROGRAM_REVIEWS,
    data
  };
}

export const searchProgramReviews = (id, query) => (dispatch) => {
  // console.log('fetchSchool action', query)
  programApi.getSearchedProgramReviews(id, query).subscribe(
    (data) => {
      dispatch(getSearchedProgramReviews(data));
    },
    (error) => {
      console.log('parsing failed', error);
    },
    () => {}
  );
};


export function postProgram(data) {
  return {
    type: POST_PROGRAM,
    data
  };
}

export const requestPostProgram = (program) => (dispatch) => {
  return new Promise((resolve, reject) => {
    programApi.postProgram(program).subscribe(
      (data) => {
        if (data) {
          dispatch(postProgram(data));
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

export function setProgram(data) {
  // console.log('data setClient', data)
  return {
    type: SET_PROGRAM,
    data
  }
};

export function putProgram(data) {

  return {
    type: PUT_PROGRAM,
    data
  };
};

export const requestPutProgram = (program) => (dispatch) => {
  return new Promise((resolve, reject) => {
    programApi.putProgram(program).subscribe(
      (data) => {
        if (data) {
          dispatch(putProgram(data));
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

export function deleteProgram(data) {
  return {
    type: DELETE_PROGRAM,
    data
  };
}

export const requestDeleteProgram = (program) => (dispatch) => {
  return new Promise((resolve, reject) => {
    programApi.deleteProgram(program).subscribe(
      (data) => {
        if (data) {
          dispatch(deleteProgram(data));
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

// export function setReviewDetailView(data) {
//   console.log('in set detail view reviews')
//   return {
//     type: SET_REVIEW_DETAIL_VIEW,
//     data
//   }
// };


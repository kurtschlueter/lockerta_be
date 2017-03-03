import {
  GET_REVIEWS,
  GET_REVIEW,
  SET_REVIEW,
  DELETE_REVIEW,
  PUT_REVIEW,
  POST_CLIENT,
  GET_ACCOUNT_MANAGERS,
  UPLOAD_CSV_SUCCESS,
  UPLOAD_CSV_ERROR,
  SHOW_NEW_CLIENT_BUTTON,
  SHOW_IMPORT_CSV,
  HIDE_IMPORT_CSV,
  SET_DETAIL_VIEW,
  SET_REVIEW_DETAIL_VIEW
} from '../actions/actionTypes.js';

import Constants from '../utils/localConstants';

const defaultState = {
  reviews: [],
  managers: [],
  review: {},
  showNewClientButton: false,
  success: false
};

export default function reviewReducer(state = defaultState, action) {
  console.log('actionssssssss', action)
  switch (action.type) {
    case GET_REVIEW:
      {
        console.log('WILL IT EVER GET HERE')
          console.log('action', action)
        let newState = state;
        const currentReview = state.reviews.find(c => c.id === action.data.id)
        if (currentReview) {
          const index = state.reviews.indexOf(currentReview);
          newState = {
            ...state,
            review: action.data,
            reviews: [
              ...state.reviews.slice(0, index),
              action.data,
              ...state.reviews.slice(index + 1)
            ]
          };
        } else {
          newState = {
            ...state,
            review: action.data,
            reviews: [...state.reviews, action.data]
          };
        }

        return newState;
      }
    // case GET_SCHOOLS:
    //   {
    //     return action.data.length > 0 ? (
    //       {
    //         ...state,
    //         schools: action.data,
    //         hasClients: true,
    //         showImportCSV: false,
    //         success: false
    //       }
    //     ) : (
    //       {
    //         ...state,
    //         schools: action.data,
    //         hasClients: false,
    //         showImportCSV: false,
    //         success: false
    //        }
    //     )
    //   }
    case GET_REVIEWS:
      {
        return action.data.length > 0 ? (
          {
            ...state,
            reviews: action.data,
            hasClients: true,
            success: false
          }
        ) : (
          {
            ...state,
            reviews: action.data,
            hasClients: false,
            success: false
           }
        )
      }
    case SET_REVIEW:
      {
        console.log('IS IT EVER GONNA SET A REVIEW')
        return {
          ...state,
          review: action.data[0]
        }
      }

    case DELETE_REVIEW:
      {
        return {
          ...state,
          reviews: [...state, action.data],
          success: true
        }
      }

    // case POST_CLIENT:
    //   {
    //     return {
    //       ...state,
    //        clients: [...state, action.data],
    //        success: true
    //      }
    //   }

    case PUT_REVIEW:
      {
        return {
          ...state,
          reviews: [...state, action.data],
          success: true
        }
      }
    // case UPLOAD_CSV_SUCCESS:
    //   {
    //     return {
    //       ...state,
    //       csvSuccess: action.data,
    //       csvError: null
    //     }
    //   }
    // case UPLOAD_CSV_ERROR:
    //  {
    //    return {
    //      ...state,
    //      csvError: action.error,
    //      csvSuccess: null
    //    }
    //  }
    // case SHOW_NEW_CLIENT_BUTTON:
    //   {
    //     return {
    //       ...state,
    //       showNewClientButton: !state.showNewClientButton
    //     }
    //   }
    // case SHOW_IMPORT_CSV:
    //   {
    //     return {
    //       ...state,
    //       showImportCSV: true
    //     }
    //   }
    // case HIDE_IMPORT_CSV:
    //   {
    //     return {
    //       ...state,
    //       showImportCSV: false
    //     }
    //   }
    case SET_DETAIL_VIEW:
    console.log('setting detail view hopefully')
      {
        return {
          ...state,
          detailViewNew: action.data
        };
      }

    default:
      {
        return state;
      }
  }
}

// //Selectors
// export const getSchools = (state) => {
//   return state.schools;
// }
export const getReviews = (state) => {
  return state.reviews;
}
// export const postClient = (state) => {
//   return state.clients;
// }
export const deleteReview = (state) => {
  return state.reviews;
}
export const putReview = (state) => {
  return state.reviews;
}
export const setReview = (state) => {
  return state.review
}
// export const csvError = (state) => {
//   return state.csvError
// }
// export const csvSuccess = (state) => {
//   return state.csvSuccess
// }
export const setDetailView = (state) => {
  return state.detailViewNew;
}
import {
  GET_SCHOOL,
  GET_SCHOOLS,
  SET_SCHOOL,
  DELETE_SCHOOL,
  PUT_CLIENT,
  POST_CLIENT,
  GET_ACCOUNT_MANAGERS,
  UPLOAD_CSV_SUCCESS,
  UPLOAD_CSV_ERROR,
  SHOW_NEW_CLIENT_BUTTON,
  SHOW_IMPORT_CSV,
  HIDE_IMPORT_CSV,
  SET_DETAIL_VIEW,
  GET_SCHOOL_PROGRAMS
} from '../actions/actionTypes.js';

import Constants from '../utils/localConstants';

const defaultState = {
  schools: [],
  managers: [],
  school: {},
  schoolprograms: [],
  showNewClientButton: false,
  showImportCSV: false,
  csvError: null,
  csvSuccess: null,
  success: false,
  detailViewNew: true,
};

export default function clientReducer(state = defaultState, action) {
  console.log('actionssssssss', action)
  switch (action.type) {
    case GET_SCHOOL:
      {
          console.log('action*********get single school **************', action)
        let newState = state;
        const currentSchool = state.schools.find(c => c.id === action.data.id)
        if (currentSchool) {
          const index = state.schools.indexOf(currentSchool);
          newState = {
            ...state,
            school: action.data,
            schools: [
              ...state.schools.slice(0, index),
              action.data,
              ...state.schools.slice(index + 1)
            ]
          };
        } else {
          newState = {
            ...state,
            school: action.data,
            schools: [...state.schools, action.data]
          };
        }

        return newState;
      }
    case GET_SCHOOLS:
      {
        return action.data.length > 0 ? (
          {
            ...state,
            schools: action.data,
            hasClients: true,
            showImportCSV: false,
            success: false
          }
        ) : (
          {
            ...state,
            schools: action.data,
            hasClients: false,
            showImportCSV: false,
            success: false
           }
        )
      }
    case GET_SCHOOL_PROGRAMS:
      console.log('getting school programs here data', action.data)
        {
          return action.data.length > 0 ? (
            {
              ...state,
              schoolprograms: action.data,
              hasClients: true,
              success: false
            }
          ) : (
            {
              ...state,
              schoolprograms: action.data,
              hasClients: false,
              success: false
             }
          )
        }
    case SET_SCHOOL:
      {
        return {
          ...state,
          school: action.data[0]
        }
      }

    case DELETE_SCHOOL:
      {
        return {
          ...state,
          schools: [...state, action.data],
          success: true
        }
      }

    case POST_CLIENT:
      {
        return {
          ...state,
           clients: [...state, action.data],
           success: true
         }
      }

    case PUT_CLIENT:
      {
        return {
          ...state,
          clients: [...state, action.data],
          success: true
        }
      }
    case UPLOAD_CSV_SUCCESS:
      {
        return {
          ...state,
          csvSuccess: action.data,
          csvError: null
        }
      }
    case UPLOAD_CSV_ERROR:
     {
       return {
         ...state,
         csvError: action.error,
         csvSuccess: null
       }
     }
    case SHOW_NEW_CLIENT_BUTTON:
      {
        return {
          ...state,
          showNewClientButton: !state.showNewClientButton
        }
      }
    case SHOW_IMPORT_CSV:
      {
        return {
          ...state,
          showImportCSV: true
        }
      }
    case HIDE_IMPORT_CSV:
      {
        return {
          ...state,
          showImportCSV: false
        }
      }
    case SET_DETAIL_VIEW:
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

//Selectors
export const getSchools = (state) => {
  return state.schools;
}

export const getSchool = (state) => {
  return state.school;
}

export const postClient = (state) => {
  return state.clients;
}
export const deleteClient = (state) => {
  return state.clients;
}
export const putClient = (state) => {
  return state.clients;
}
export const setSchool = (state) => {
  return state.school
}
export const csvError = (state) => {
  return state.csvError
}
export const csvSuccess = (state) => {
  return state.csvSuccess
}
export const setDetailView = (state) => {
  return state.detailViewNew;
}
export const getSchoolPrograms = (state) => {
  return state.schoolprograms;
}
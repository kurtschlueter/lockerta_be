import {
  GET_CLIENT,
  GET_CLIENTS,
  SET_CLIENT,
  PUT_CLIENT,
  POST_CLIENT,
  GET_ACCOUNT_MANAGERS,
  UPLOAD_CSV_SUCCESS,
  UPLOAD_CSV_ERROR,
  SHOW_NEW_CLIENT_BUTTON,
  SHOW_IMPORT_CSV,
  HIDE_IMPORT_CSV
} from '../actions/actionTypes.js';

import Constants from '../utils/localConstants';

const defaultState = {
  clients: [],
  managers: [],
  client: {},
  showNewClientButton: false,
  showImportCSV: false,
  csvError: null,
  csvSuccess: null,
  success: false
};

export default function clientReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_CLIENT:
      {
        let newState = state;
        const currentClient = state.clients.find(c => c.id === action.data.id)
        if (currentClient) {
          const index = state.clients.indexOf(currentClient);
          newState = {
            ...state,
            client: action.data,
            clients: [
              ...state.clients.slice(0, index),
              action.data,
              ...state.clients.slice(index + 1)
            ]
          };
        } else {
          newState = {
            ...state,
            client: action.data,
            clients: [...state.clients, action.data]
          };
        }

        return newState;
      }
    case GET_CLIENTS:
      {
        return action.data.length > 0 ? (
          {
            ...state,
            clients: action.data,
            hasClients: true,
            showImportCSV: false,
            success: false
          }
        ) : (
          {
            ...state,
            clients: action.data,
            hasClients: false,
            showImportCSV: false,
            success: false
           }
        )
      }
    case SET_CLIENT:
      {
        return {
          ...state,
          client: action.data[0]
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
    default:
      {
        return state;
      }
  }
}

//Selectors
export const getClients = (state) => {
  return state.clients;
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
export const setClient = (state) => {
  return state.client
}
export const csvError = (state) => {
  return state.csvError
}
export const csvSuccess = (state) => {
  return state.csvSuccess
}

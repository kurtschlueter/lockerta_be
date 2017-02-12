import { GET_INTEGRATIONS, 
  GET_CLIENT_INTEGRATIONS, 
  POST_INTEGRATIONS, 
  PUT_INTEGRATIONS 
} from '../actions/actionTypes.js';

export default function integrationReducer(state = { integrations: [], clientIntegrations: null }, action) {
  switch (action.type) {
    case GET_INTEGRATIONS:
      {
        return {
          ...state,
          integrations: action.data,
          showSuccessPopup: false,
        }
      }
    case GET_CLIENT_INTEGRATIONS:
      {
        return {
          ...state,
          clientIntegrations: action.data,
          showSuccessPopup: false,
        };
      }
    case POST_INTEGRATIONS:
      {
        return {
          ...state,
          showSuccessPopup: true,
        };
      }
    case PUT_INTEGRATIONS:
      {
        return {
          ...state,
          showSuccessPopup: true,
        };
      }
    default:
      {
        return state;
      }
  }
}

//Selectors
export const getIntegrations = (state) => {
  return state.integrations;
}

export const getClientIntegrations = (state) => {
  return state.clientIntegrations;
}
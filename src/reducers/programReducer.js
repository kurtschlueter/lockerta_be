import {
  GET_PROGRAMS,
  GET_PROGRAM,
  SET_PROGRAM,
  DELETE_PROGRAM,
  PUT_PROGRAM,
  POST_PROGRAM,
  SET_DETAIL_VIEW,
  GET_PROGRAM_REVIEWS
} from '../actions/actionTypes.js';

import Constants from '../utils/localConstants';

const defaultState = {
  programs: [],
  program: {},
  programreviews: [],
  success: false
};

export default function programReducer(state = defaultState, action) {
  console.log('actionssssssss', action)
  switch (action.type) {
    case GET_PROGRAM:
      {
        console.log('action', action)
        let newState = state;       
        const currentProgram = state.programs.find(c => c.id === action.data.id)
        if (currentProgram) {
          const index = state.programs.indexOf(currentProgram);
          newState = {
            ...state,
            program: action.data,
            programs: [
              ...state.programs.slice(0, index),
              action.data,
              ...state.programs.slice(index + 1)
            ]
          };
        } else {
          newState = {
            ...state,
            program: action.data,
            programs: [...state.programs, action.data]
          };
        }

        return newState;
      }
    case GET_PROGRAMS:
      {
        return action.data.length > 0 ? (
          {
            ...state,
            programs: action.data,
            hasClients: true,
            success: false
          }
        ) : (
          {
            ...state,
            programs: action.data,
            hasClients: false,
            success: false
           }
        )
      }
    case GET_PROGRAM_REVIEWS:
    console.log('getting program reviews here data', action.data)
      {
        return action.data.length > 0 ? (
          {
            ...state,
            programreviews: action.data,
            hasClients: true,
            success: false
          }
        ) : (
          {
            ...state,
            programreviews: action.data,
            hasClients: false,
            success: false
           }
        )
      }
    case SET_PROGRAM:
      {
        return {
          ...state,
          program: action.data[0]
        }
      }

    case DELETE_PROGRAM:
      {
        return {
          ...state,
          programs: [...state, action.data],
          success: true
        }
      }

    case POST_PROGRAM:
      {
        return {
          ...state,
           programs: [...state, action.data],
           success: true
         }
      }

    case PUT_PROGRAM:
      {
        return {
          ...state,
          programs: [...state, action.data],
          success: true
        }
      }
    // case SHOW_NEW_CLIENT_BUTTON:
    //   {
    //     return {
    //       ...state,
    //       showNewClientButton: !state.showNewClientButton
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
export const getPrograms = (state) => {
  return state.programs;
}
export const getProgramReviews = (state) => {
  return state.programreviews;
}
export const postProgram = (state) => {
  return state.programs;
}
export const deleteProgram = (state) => {
  return state.programs;
}
export const putProgram = (state) => {
  return state.programs;
}
export const setProgram = (state) => {
  return state.program
}
export const setDetailView = (state) => {
  return state.detailViewNew;
}
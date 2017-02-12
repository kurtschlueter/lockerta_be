import {
  GET_AGENCIES
} from './actionTypes';
import * as agencyApi from '../api/agencyApi';

export function getAgencies(data) {
  return {
    type: GET_AGENCIES,
    data
  };
}

export const fetchAgencies = (options) => (dispatch) => {
  agencyApi.getAgencies(options).subscribe(
    (data) => {
      dispatch(getAgencies(data));
    },
    (error) => {
      console.log('parsing failed', error);
    },
    () => {}
  );
};

import * as profileApi from './../api/profileApi';

import {
  GET_PROFILE,
  UPDATE_PROFILE_SUCCESS
} from './actionTypes';

export function getProfile(data) {
  return {
    type: GET_PROFILE,
    data
  };
}

export const fetchProfile = (filters, offset, limit) => (dispatch) => {
  profileApi.getProfile().subscribe(
    (data) => {
      dispatch(getProfile(data));
    },
    (error) => {
      console.log('parsing failed', error);
    },
    () => {}
  );
};

export function updateProfileResponse(data) {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    isSaved: true,
    data
  };
}

export const requestUpdateProfile = (profile) => (dispatch) => {
  return new Promise ((resolve,reject) => {
    profileApi.updateProfile(profile).subscribe(
      (data) => {
        if (data) {
          dispatch(updateProfileResponse(data));
        }
        resolve();
      },
      (error) => {
        reject(error);
      },
      () => {
      });
  })
};

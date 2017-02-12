import { GET_INTEGRATIONS, GET_CLIENT_INTEGRATIONS, POST_INTEGRATIONS, PUT_INTEGRATIONS } from './actionTypes';
import * as integrationsApi from './../api/integrationsApi';


export function getIntegrations(data) {
  return {
    type: GET_INTEGRATIONS,
    data
  };
}

export const fetchIntegrations = () => (dispatch) => {
  integrationsApi.getIntegrations().subscribe(
    (data) => {
      dispatch(getIntegrations(data));
    },
    (error) => {
      console.log('parsing failed', error);
    },
    () => {}
  );
};

export function getClientIntegrations(data) {
  return {
    type: GET_CLIENT_INTEGRATIONS,
    data
  };
}

export const fetchClientIntegrations = (option) => (dispatch) => {
  integrationsApi.getClientIntegrations(option).subscribe(
    (data) => {
      dispatch(getClientIntegrations(data));
    },
    (error) => {
      console.log('parsing failed', error);
    },
    () => {}
  );
};

export function postIntegrations(data) {
  return {
    type: POST_INTEGRATIONS,
    data: { clientId: data.clientId, sourceId: data.sourceId, sourceFieldId: data.sourceFieldId, value: data.value }
  };
}

export const requestPostIntegrations = (integrations) => (dispatch) => {
  return new Promise((resolve, reject) => {
    integrationsApi.postIntegrations(integrations).subscribe(
      (data) => {
        if (data) {
          dispatch(postIntegrations(data));
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

export function putIntegrations(data) {
  return {
    type: PUT_INTEGRATIONS,
    data: { clientId: data.clientId, sourceId: data.sourceId, sourceFieldId: data.sourceFieldId, value: data.value }
  };
}

export const requestPutIntegrations = (integrations) => (dispatch) => {
  return new Promise((resolve, reject) => {
    integrationsApi.putIntegrations(integrations).subscribe(
      (data) => {
        if (data) {
          dispatch(putIntegrations(data));
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
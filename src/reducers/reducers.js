import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import clientReducer from './clientReducer';
import loginReducer from './loginReducer';
import integrationReducer from './integrationReducer';
import profileReducer from './profileReducer';
import agencyReducer from './agencyReducer';
import managerReducer from './managerReducer';
import specialistReducer from './specialistReducer';
import modalReducer from './modalReducer';
import navbarReducer from './navbarReducer';

const moranReducers = combineReducers({
  clients: clientReducer,
  loginState: loginReducer,
  integrations: integrationReducer,
  profile: profileReducer,
  routing: routerReducer,
  agencies: agencyReducer,
  managers: managerReducer,
  specialists: specialistReducer,
  modal: modalReducer,
  navbar: navbarReducer
});

export default moranReducers;

// Selectors
import * as clientSelectors from './clientReducer';
import * as integrationSelectors from './integrationReducer'
import * as profileSelectors from './profileReducer';
import * as agencySelectors from './agencyReducer'
import * as managerSelectors from './managerReducer'
import * as specialistSelector from './specialistReducer'

export const getClients = (state) => {
  return clientSelectors.getClients(state.clients);
}

export const getIntegrations = (state) => {
  return integrationSelectors.getIntegrations(state.integrations);
}

export const getClientIntegrations = (state) => {
  return integrationSelectors.getClientIntegrations(state.integrations);
}

export const getProfile = (state) => {
  return profileSelectors.getProfile(state.profile);
}

export const getManagers = (state) => {
  return managerSelectors.getManagers(state.managers);
}

export const getSpecialists = (state) => {
  return specialistSelector.getSpecialists(state.specialists);
}

export const getAgencies = (state) => {
  return agencySelectors.getAgencies(state.managers);
}

export const setClient = (state) => {
  return clientSelectors.setClient(state.clients);
}

export const csvError = (state) => {
  return clientSelectors.csvError(state.clients)
}

export const csvSuccess = (state) => {
  return clientSelectors.csvSuccess(state.clients)
}

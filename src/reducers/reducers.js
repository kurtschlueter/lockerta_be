import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import clientReducer from './clientReducer';
import reviewReducer from './reviewReducer';
import programReducer from './programReducer';
import loginReducer from './loginReducer';
import integrationReducer from './integrationReducer';
import profileReducer from './profileReducer';
import agencyReducer from './agencyReducer';
import managerReducer from './managerReducer';
import specialistReducer from './specialistReducer';
import modalReducer from './modalReducer';
import navbarReducer from './navbarReducer';

const moranReducers = combineReducers({
  schools: clientReducer,
  school: clientReducer,
  reviews: reviewReducer,
  programs: programReducer,
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
import * as reviewSelectors from './reviewReducer';
import * as programSelectors from './programReducer';
import * as integrationSelectors from './integrationReducer'
import * as profileSelectors from './profileReducer';
import * as agencySelectors from './agencyReducer'
import * as managerSelectors from './managerReducer'
import * as specialistSelector from './specialistReducer'
import * as modalSelector from './modalReducer'

export const getSchools = (state) => {
  // console.log('clientSelectors', clientSelectors  )
  return clientSelectors.getSchools(state.schools);
}

export const getSchool = (state) => {
  // console.log('clientSelectors', clientSelectors  )
  return clientSelectors.getSchool(state.school);
}

export const getReviews = (state) => {
  // console.log('clientSelectors', clientSelectors  )
  return reviewSelectors.getReviews(state.reviews);
}

export const getPrograms = (state) => {
  // console.log('clientSelectors', clientSelectors  )
  return programSelectors.getPrograms(state.programs);
}

export const getProgramReviews = (state) => {
  // console.log('clientSelectors', clientSelectors  )
  return programSelectors.getProgramReviews(state.programs);
}

export const getSchoolPrograms = (state) => {
  // console.log('clientSelectors', clientSelectors  )
  return clientSelectors.getSchoolPrograms(state.schools);
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

export const setSchool = (state) => {
  console.log('setSchools main reducers', state )
  return clientSelectors.setSchool(state.schools);
}

export const setReview = (state) => {
  console.log('setReviews main reducers', state )
  return reviewSelectors.setReview(state.reviews);
}

export const setProgram = (state) => {
  console.log('setPrograms main reducers', state )
  return programSelectors.setProgram(state.programs);
}

export const csvError = (state) => {
  return clientSelectors.csvError(state.clients)
}

export const csvSuccess = (state) => {
  return clientSelectors.csvSuccess(state.clients)
}

export const setDetailView = (state) => {
  return clientSelectors.detailView(state.detailViewNew)
}

export const setReviewDetailView = (state) => {
  return reviewSelectors.detailView(state.detailViewNew)
}

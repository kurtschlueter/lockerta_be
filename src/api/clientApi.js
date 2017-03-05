import networkClient from '../utils/networkLayer/NetworkClient';
import {
  getSchoolDefinition,
  getSchoolsDefinition,
  postSchoolDefinition,
  putSchoolDefinition,
  searchSchoolsDefinition,
  deleteSchoolDefinition,
  uploadCSVDefiniton,
  getSchoolProgramsDefinition,
  searchSchoolProgramsDefinition
} from '../utils/networkLayer/networkApiDefinition';


export function getSchool(id) {
  // console.log('getSchool api', id)
  const school = networkClient.observableClient(getSchoolDefinition(id));
  return school;
}

export function getSchoolPrograms(id) {
  console.log('GETSCHOOLPROGRAMS api', id)
  const programs = networkClient.observableClient(getSchoolProgramsDefinition(id));
  return programs;
}

export function getSchools() {
  // console.log('getClients api data')
  const school = networkClient.observableClient(getSchoolsDefinition());
  return school;
}

export function getSearchedSchools(query) {
  // console.log('getClients api data')
  const client = networkClient.observableClient(searchSchoolsDefinition(query));
  return client;
}

export function getSearchedSchoolPrograms(id, query) {
  // console.log('getClients api data')
  const client = networkClient.observableClient(searchSchoolProgramsDefinition(id, query));
  return client;
}

export function postSchool(school) {
  return networkClient.observableClient(postSchoolDefinition(school));
}

export function putSchool(school) {
  return networkClient.observableClient(putSchoolDefinition(school))
}


export function deleteSchool(school) {
  return networkClient.observableClient(deleteSchoolDefinition(school))
}

export function uploadCSVFiles(csv) {
  return networkClient.observableClient(uploadCSVDefiniton(csv))
}

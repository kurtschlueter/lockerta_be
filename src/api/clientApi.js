import networkClient from '../utils/networkLayer/NetworkClient';
import {
  getSchoolDefinition,
  getSchoolsDefinition,
  postSchoolDefinition,
  putSchoolDefinition,
  deleteSchoolDefinition,
  uploadCSVDefiniton
} from '../utils/networkLayer/networkApiDefinition';


export function getSchool(id) {
  // console.log('getSchool api', id)
  const school = networkClient.observableClient(getSchoolDefinition(id));
  return school;
}

export function getSchools() {
  // console.log('getClients api data')
  const school = networkClient.observableClient(getSchoolsDefinition());
  return school;
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

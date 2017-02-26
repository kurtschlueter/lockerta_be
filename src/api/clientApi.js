import networkClient from '../utils/networkLayer/NetworkClient';
import {
  getSchoolDefinition,
  getSchoolsDefinition,
  postClientDefinition,
  putSchoolDefinition,
  deleteClientDefinition,
  uploadCSVDefiniton,
  searchSchoolsDefinition
} from '../utils/networkLayer/networkApiDefinition';


export function getSchool(id) {
  // console.log('getSchool api', id)
  const client = networkClient.observableClient(getSchoolDefinition(id));
  return client;
}

export function getSchools() {
  // console.log('getClients api data')
  const client = networkClient.observableClient(getSchoolsDefinition());
  return client;
}

export function getSearchedSchools(query) {
  // console.log('getClients api data')
  const client = networkClient.observableClient(searchSchoolsDefinition(query));
  return client;
}

export function postClient(client) {
  return networkClient.observableClient(postClientDefinition(client));
}

export function putSchool(school) {
  return networkClient.observableClient(putSchoolDefinition(school))
}


export function deleteClient(client) {
  return networkClient.observableClient(deleteClientDefinition(client))
}

export function uploadCSVFiles(csv) {
  return networkClient.observableClient(uploadCSVDefiniton(csv))
}

import networkClient from '../utils/networkLayer/NetworkClient';
import {
  getSchoolDefinition,
  getSchoolsDefinition,
  postClientDefinition,
  putClientDefinition,
  deleteClientDefinition,
  uploadCSVDefiniton
} from '../utils/networkLayer/networkApiDefinition';


export function getSchool(id) {
  const client = networkClient.observableClient(getSchoolDefinition(id));
  return client;
}

export function getSchools() {
  console.log('getClients api data')
  const client = networkClient.observableClient(getSchoolsDefinition());
  return client;
}

export function postClient(client) {
  return networkClient.observableClient(postClientDefinition(client));
}

export function putClient(client) {
  return networkClient.observableClient(putClientDefinition(client))
}

export function deleteClient(client) {
  return networkClient.observableClient(deleteClientDefinition(client))
}

export function uploadCSVFiles(csv) {
  return networkClient.observableClient(uploadCSVDefiniton(csv))
}

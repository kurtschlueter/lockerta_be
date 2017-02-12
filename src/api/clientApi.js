import networkClient from '../utils/networkLayer/NetworkClient';
import {
  getClientDefinition,
  getClientsDefinition,
  postClientDefinition,
  putClientDefinition,
  deleteClientDefinition,
  uploadCSVDefiniton
} from '../utils/networkLayer/networkApiDefinition';


export function getClient(id) {
  const client = networkClient.observableClient(getClientDefinition(id));
  return client;
}

export function getClients() {
  const client = networkClient.observableClient(getClientsDefinition());
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

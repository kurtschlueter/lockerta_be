import networkClient from '../utils/networkLayer/NetworkClient';
import {
  getSpecialistsDefinition,
  postSpecialistDefinition,
  putSpecialistDefinition,
  deleteSpecialistDefinition
} from '../utils/networkLayer/networkApiDefinition';

export function getSpecialists(options) {
  return networkClient.observableClient(getSpecialistsDefinition(options));
}

export function postSpecialist(specialist) {
  return networkClient.observableClient(postSpecialistDefinition(specialist));
}

export function putSpecialist(specialist) {
  return networkClient.observableClient(putSpecialistDefinition(specialist));
}

export function deleteSpecialist(specialist) {
  return networkClient.observableClient(deleteSpecialistDefinition(specialist));
}

import networkClient from '../utils/networkLayer/NetworkClient';
import { getAccountManagersDefinition, postAccountManagerDefinition, putAccountManagerDefinition, deleteAccountManagerDefinition } from '../utils/networkLayer/networkApiDefinition';

export function getAccountManagers(options) {
  return networkClient.observableClient(getAccountManagersDefinition(options));
}

export function postAccountManager(manager) {
  return networkClient.observableClient(postAccountManagerDefinition(manager));
}

export function putAccountManager(manager) {
  return networkClient.observableClient(putAccountManagerDefinition(manager))
}

export function deleteAccountManager(manager) {
  return networkClient.observableClient(deleteAccountManagerDefinition(manager))
}

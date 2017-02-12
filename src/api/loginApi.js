import networkClient from '../utils/networkLayer/NetworkClient';
import { loginDefinition } from '../utils/networkLayer/networkApiDefinition';

export function login(credentials) {
  const client = networkClient.observableClient(loginDefinition(credentials.username, credentials.password));
  return client;
}
import networkClient from '../utils/networkLayer/NetworkClient';
import { getAgenciesDefinition } from '../utils/networkLayer/networkApiDefinition';

export function getAgencies(options) {
  return networkClient.observableClient(getAgenciesDefinition(options));
}

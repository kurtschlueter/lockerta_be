import networkClient from '../utils/networkLayer/NetworkClient';
import { getIntegrationsDefinition, getClientIntegrationsDefinition, postIntegrationsDefinition, putIntegrationsDefinition } from '../utils/networkLayer/networkApiDefinition';

/**
 * Gets integrations
 */
export function getIntegrations() {
  const client = networkClient.observableClient(getIntegrationsDefinition());
  return client;
}

/**
 * Gets client integrations
 */
export function getClientIntegrations(option) {
  const client = networkClient.observableClient(getClientIntegrationsDefinition(option));
  return client;
}

/**
 * Post client integrations
 */
export function postIntegrations(integrations) {
  const client = networkClient.observableClient(postIntegrationsDefinition(integrations));
  return client;
}

/**
 * Put client integrations
 */
export function putIntegrations(integrations) {
  const client = networkClient.observableClient(putIntegrationsDefinition(integrations));
  return client;
}
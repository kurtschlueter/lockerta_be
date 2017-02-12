import networkClient from '../utils/networkLayer/NetworkClient';
import { getProfileDefinition, updateProfileDefinition } from '../utils/networkLayer/networkApiDefinition';

/**
 * Gets a profile
 */
export function getProfile() {
  const client = networkClient.observableClient(getProfileDefinition());
  return client;
}

/**
 * Updates an existing profile
 */
export function updateProfile(profile) {
  const client = networkClient.observableClient(updateProfileDefinition(profile));
  return client;
}
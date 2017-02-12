import networkClient from '../utils/networkLayer/NetworkClient';
import { getUsersDefinition } from '../utils/networkLayer/networkApiDefinition';

export function getUsers(client) {
	return networkClient.observableClient(getUsersDefinition(client))
}
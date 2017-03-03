import networkClient from '../utils/networkLayer/NetworkClient';
import {
  getProgramsDefinition,
  getProgramDefinition,
  postProgramDefinition,
  putProgramDefinition,
  searchProgramsDefinition,
  deleteProgramDefinition
} from '../utils/networkLayer/networkApiDefinition';


export function getProgram(id) {
  // console.log('getSchool api', id)
  const program = networkClient.observableClient(getProgramDefinition(id));
  return program;
}

export function getPrograms() {
  // console.log('getClients api data')
  const program = networkClient.observableClient(getProgramsDefinition());
  return program;
}

export function getSearchedPrograms(query) {
  // console.log('getClients api data')
  const client = networkClient.observableClient(searchProgramsDefinition(query));
  return client;
}

export function postProgram(program) {
  return networkClient.observableClient(postProgramDefinition(program));
}

export function putProgram(program) {
  return networkClient.observableClient(putProgramDefinition(program))
}


export function deleteProgram(program) {
  return networkClient.observableClient(deleteProgramDefinition(program))
}



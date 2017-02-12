import { httpMethods } from './httpMethods';

const basePaths = require('./../../assets/resources/' + process.env.RESOURCES + '/constants.js').basePaths;

const basicHeaders = {
  'Content-Type': 'application/json'
};

// ******* Clients **********

export function getClientDefinition(id) {
  return {
    method: httpMethods.GET,
    headers: basicHeaders,
    path: `/UserManagement/client/${id}`,
    basePath: basePaths.userManagement[process.env.STAGE]
  };
}

export function getClientsDefinition() {
  return {
    method: httpMethods.GET,
    headers: basicHeaders,
    path: '/UserManagement/clientsWithProducts',
    basePath: basePaths.userManagement[process.env.STAGE]
  };
}

export function postClientDefinition(client) {
  return {
    method: httpMethods.POST,
    headers: basicHeaders,
    path: '/UserManagement/client',
    basePath: basePaths.userManagement[process.env.STAGE],
    body: JSON.stringify({
      name: client.name,
      type: client.type,
      phone: client.phone,
      address: client.address,
      zipCode: client.zipCode,
      city: client.city,
      state: client.state,
      managerId: client.managerId,
      isActive: client.isActive
    })
  };
}
console.log('base paths', basePaths);
export function deleteClientDefinition(client) {
  return {
    method: httpMethods.DELETE,
    headers: basicHeaders,
    path: `/UserManagement/client/${client.id}`,
    basePath: basePaths.userManagement[process.env.STAGE],
    body: client
  };
}
export function putClientDefinition(client) {
  return {
    method: httpMethods.PUT,
    headers: basicHeaders,
    path: `/UserManagement/client/${client.id}`,
    basePath: basePaths.userManagement[process.env.STAGE],
    body: JSON.stringify({
      name: client.name,
      type: client.type,
      phone: client.phone,
      address: client.address,
      zipCode: client.zipCode,
      city: client.city,
      state: client.state,
      managerId: client.managerId,
      isActive: client.isActive
    })
  };
}

export function getUsersDefinition(client) {
  return {
    method: httpMethods.GET,
    headers: basicHeaders,
    basePath: basePaths.userManagement[process.env.STAGE],
    path: '/UserManagement/clientsWithProducts'
  }
}
// ******* Profile **********

export function getProfileDefinition() {
  return {
    method: httpMethods.GET,
    headers: basicHeaders,
    path: '/UserManagement/manager/profile',
    basePath: basePaths.userManagement[process.env.STAGE]
  };
}

export function updateProfileDefinition(profile) {
  return {
    method: httpMethods.PUT,
    headers: basicHeaders,
    path: `/UserManagement/manager/${profile.id}`,
    basePath: basePaths.userManagement[process.env.STAGE],
    body: JSON.stringify({ name: profile.name, email: profile.email, phone: profile.phone })
  };
}

// ******* Login **********

export function loginDefinition(username, password) {
  return {
    method: httpMethods.POST,
    headers: basicHeaders,
    path: '/Security/login',
    basePath: basePaths.security[process.env.STAGE],
    body: JSON.stringify({ user: username, password: password })
  };
}

// ******* Integrations **********
export function getIntegrationsDefinition() {
  return {
    method: httpMethods.GET,
    headers: basicHeaders,
    path: '/UserManagement/source/fields',
    basePath: basePaths.userManagement[process.env.STAGE]
  };
}

export function getClientIntegrationsDefinition(option) {
  return {
    method: httpMethods.GET,
    headers: basicHeaders,
    path: `/UserManagement/client/${option.id}/sources/values`,
    basePath: basePaths.userManagement[process.env.STAGE]
  };
}

export function postIntegrationsDefinition(clientIntegrations) {
  return {
    method: httpMethods.POST,
    headers: basicHeaders,
    path: `/UserManagement/client/${clientIntegrations.clientId}/source/value`,
    basePath: basePaths.userManagement[process.env.STAGE],
    body: JSON.stringify({ clientId: clientIntegrations.clientId, sourceId: clientIntegrations.sourceId, sourceFieldId: clientIntegrations.sourceFieldId, value: clientIntegrations.value })
  };
}

export function putIntegrationsDefinition(clientIntegrations) {
  return {
    method: httpMethods.PUT,
    headers: basicHeaders,
    path: `/UserManagement/client/${clientIntegrations.clientId}/source/value`,
    basePath: basePaths.userManagement[process.env.STAGE],
    body: JSON.stringify({ clientId: clientIntegrations.clientId, sourceId: clientIntegrations.sourceId, sourceFieldId: clientIntegrations.sourceFieldId, value: clientIntegrations.value })
  };
}

// ******* Account Managers **********

export function getAccountManagersDefinition(options) {
  return {
    method: httpMethods.GET,
    headers: basicHeaders,
    path: `/UserManagement/manager?sort=name&limit=${options.limit}&offset=${options.offset}`,
    basePath: basePaths.userManagement[process.env.STAGE]
  };
}

export function postAccountManagerDefinition(manager) {
  return {
    method: httpMethods.POST,
    headers: basicHeaders,
    path: '/UserManagement/manager',
    basePath: basePaths.userManagement[process.env.STAGE],
    body: JSON.stringify({ name: manager.name, email: manager.email, phone: manager.phone })
  };
}

export function deleteAccountManagerDefinition(manager) {
  return {
    method: httpMethods.DELETE,
    headers: basicHeaders,
    path: `/UserManagement/manager/${manager.id}`,
    basePath: basePaths.userManagement[process.env.STAGE],
    body: manager
  };
}
export function putAccountManagerDefinition(manager) {
  return {
    method: httpMethods.PUT,
    headers: basicHeaders,
    path: `/UserManagement/manager/${manager.id}`,
    basePath: basePaths.userManagement[process.env.STAGE],
    body: JSON.stringify({ name: manager.name, email: manager.email, phone: manager.phone })
  };
}

// ******* Specialists **********

export function getSpecialistsDefinition(options) {
  return {
    method: httpMethods.GET,
    headers: basicHeaders,
    path: `/UserManagement/specialist?sort=name&limit=${options.limit}&offset=${options.offset}`,
    basePath: basePaths.userManagement[process.env.STAGE]
  };
}

export function postSpecialistDefinition(specialist) {
  return {
    method: httpMethods.POST,
    headers: basicHeaders,
    path: '/UserManagement/specialist',
    basePath: basePaths.userManagement[process.env.STAGE],
    body: JSON.stringify({ name: specialist.name, email: specialist.email, phone: specialist.phone })
  };
}

export function deleteSpecialistDefinition(specialist) {
  return {
    method: httpMethods.DELETE,
    headers: basicHeaders,
    path: `/UserManagement/specialist/${specialist.id}`,
    basePath: basePaths.userManagement[process.env.STAGE],
    body: specialist
  };
}
export function putSpecialistDefinition(specialist) {
  return {
    method: httpMethods.PUT,
    headers: basicHeaders,
    path: `/UserManagement/specialist/${specialist.id}`,
    basePath: basePaths.userManagement[process.env.STAGE],
    body: JSON.stringify({ name: specialist.name, email: specialist.email, phone: specialist.phone })
  };
}


// ******* Import CSV **********

export function uploadCSVDefiniton(json) {
  return {
    method: httpMethods.POST,
    headers: basicHeaders,
    path: `/UserManagement/client/updateCSV`,
    basePath: basePaths.userManagement[process.env.STAGE],
    body: json
  }
}

// ******* Agency **********

export function getAgenciesDefinition(options) {
  return {
    method: httpMethods.GET,
    headers: basicHeaders,
    path: `/UserManagement/agency?sort=name&limit=${options.limit}&offset=${options.offset}`,
    basePath: basePaths.userManagement[process.env.STAGE]
  };
}

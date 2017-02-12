// Lambda configs
export const basePaths = {
  userManagement: {
    qa: 'https://10ket2n2s1.execute-api.us-east-1.amazonaws.com/qa',
    dev: 'https://5elnghi9hj.execute-api.us-east-1.amazonaws.com/dev',
    prod: 'https://llc5sba4kh.execute-api.us-east-1.amazonaws.com/prod'
  },
  security: {
    qa: 'https://e7r4nz2n24.execute-api.us-east-1.amazonaws.com/qa',
    dev: 'https://t9qf10gvza.execute-api.us-east-1.amazonaws.com/dev',
    prod: 'https://suv77zq3z7.execute-api.us-east-1.amazonaws.com/prod'
  },
  reporting: {
    qa: 'https://8k3vfrjz6b.execute-api.us-east-1.amazonaws.com/qa',
    dev: 'https://c23vyqlzjb.execute-api.us-east-1.amazonaws.com/dev',
    prod: 'https://sson4nyd95.execute-api.us-east-1.amazonaws.com/prod'
  }
};

// Grid configs

const headerStyle = { width: '40px', height: '14px', marginTop: '16px', marginRight: '20px', color: '#0d2832' };
const rowStyle = { width: '40px', height: '14px', marginTop: '25px', backgroundColor: '', marginRight: '20px' };

export const clientListMetaData = {
  columns: [
        { field: 'name', title: 'CLIENT NAME ', headerDefinition: 'nameHeader', ascending: true },
        { field: 'manager', title: 'ACC. MANAGER', headerDefinition: 'managerHeader', ascending: false },
        { field: 'type', title: 'CLIENT TYPE ', headerDefinition: 'typeHeader', ascending: false },
        { field: 'offline', headerDefinition: 'offlineHeader' },
        { field: 'online', headerDefinition: 'onlineHeader' },
        // { field: 'schedule', title: 'Scheduling', headerDefinition: 'scheduleCell' }
  ],
  cells: [
    {
      id: 'offlineHeader',
      className: ['icon-sem'],
      style: headerStyle
    },
    {
      id: 'offlineRow',
      className: ['icon-sem'],
      style: rowStyle
    },
    {
      id: 'onlineHeader',
      className: ['fa fa-desktop'],
      style: headerStyle
    },
    {
      id: 'onlineRow',
      className: ['fa fa-desktop'],
      style: rowStyle
    },
    {
      id: 'emptyProductRow',
      className: ['fa fa-video-camera'],
      style: { ...rowStyle, color: 'white' }
    },
    {
      id: 'nameHeader',
      style: { width: '500px', marginRight: '20px', marginLeft: '17px', fontWeight: '400', fontSize: '14px', color: '#0d2832' }
    },
    {
      id: 'nameRow',
      style: { width: '500px', marginRight: '20px', marginLeft: '17px', fontWeight: '400', fontSize: '14px' }
    },
    {
      id: 'managerHeader',
      style: { width: '500px', marginRight: '20px', color: '#0d2832' }
    },
    {
      id: 'managerRow',
      style: { width: '500px', marginRight: '20px' }
    },
    {
      id: 'typeHeader',
      style: { width: '250px', marginLeft: '20px', color: '#0d2832' }
    },
    {
      id: 'typeRow',
      style: { width: '250px', marginLeft: '20px' }
    }
  ]
};

export function mappedClients(clients) {
  return clients.map((c) => {
    return {
      id: c.id,
      name: { value: c.name, cellDefinition: 'nameRow' },
      manager: { value: c.managerName, cellDefinition: 'managerRow' },
      offline: c.products.find(p => p.name === 'Offline') ? { cellDefinition: 'offlineRow' } : { cellDefinition: 'emptyProductRow' },
      online: c.products.find(p => p.name === 'Online') ? { cellDefinition: 'onlineRow' } : { cellDefinition: 'emptyProductRow' },
      type: { value: c.type, cellDefinition: 'typeRow' }
    };
  });
}

export const clientDetailInformationTabElements = [
  {
    type: 'TextInput',
    title: 'Name',
    id: 'name',
    name: 'name'
  },
  {
    type: 'DropDown',
    title: 'Account Manager',
    id: 'managerId'
  },
  {
    type: 'DropDown',
    title: 'Client Type',
    id: 'type'
  },
  {
    type: 'TextInput',
    title: 'Phone',
    id: 'phone',
    name: 'phone'
  },
  {
    type: 'TextInput',
    title: 'Street',
    id: 'address',
    name: 'address'
  },
  {
    type: 'TextInput',
    title: 'Zip Code',
    id: 'zipCode',
    name: 'zipCode'
  },
  {
    type: 'TextInput',
    title: 'City',
    id: 'city',
    name: 'city'
  },
  {
    type: 'DropDown',
    title: 'State',
    id: 'state'
  }
];
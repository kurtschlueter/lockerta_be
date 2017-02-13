export const basePaths = {
  userManagement: {
    qa: 'https://6yi0jt7yk0.execute-api.us-east-1.amazonaws.com/qa',
    dev: 'https://k84rpkzn24.execute-api.us-east-1.amazonaws.com/dev'
  },
  security: {
    qa: 'https://sri65eqhuc.execute-api.us-east-1.amazonaws.com/qa',
    dev: 'https://2rp22qgw7l.execute-api.us-east-1.amazonaws.com/dev'
  },
  scheduling: {
    qa: 'https://w7ir8x33eb.execute-api.us-east-1.amazonaws.com/qa',
    dev: 'https://2ta09izrdi.execute-api.us-east-1.amazonaws.com/dev'
  }
};

const headerStyle = { width: '40px', height: '14px', marginTop: '16px', marginRight: '20px', color: '#0d2832' };
const rowStyle = { width: '40px', height: '14px', marginTop: '25px', backgroundColor: '', marginRight: '20px' };

export const schoolListMetaData = {
  columns: [
        { field: 'agency', title: 'AGENCY', headerDefinition: 'agencyHeader' },
        { field: 'acronym', title: 'ACRONYM', headerDefinition: 'acronymHeader' },
        { field: 'name', title: 'CLIENT NAME', headerDefinition: 'nameHeader', ascending: true },
        { field: 'specialist', title: 'SPECIALIST', headerDefinition: 'specialistHeader', ascending: false },
        { field: 'online', headerDefinition: 'onlineHeader' },
        // { field: 'schedule', title: 'Scheduling', headerDefinition: 'scheduleCell' }
  ],
  cells: [
    {
      id: 'onlineHeader',
      className: ['icon-sem'],
      style: headerStyle
    },
    {
      id: 'onlineRow',
      className: ['icon-sem'],
      style: rowStyle
    },
    {
      id: 'emptyProductRow',
      className: ['fa fa-video-camera'],
      style: { ...rowStyle, color: 'white' }
    },
    {
      id: 'agencyHeader',
      style: { width: '10%', marginRight: '20px' }
    },
    {
      id: 'agencyRow',
      style: { width: '10%', marginRight: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }
    },
    {
      id: 'acronymHeader',
      style: { width: '10%', marginRight: '20px' }
    },
    {
      id: 'acronymRow',
      style: { width: '10%', marginRight: '20px' }
    },
    {
      id: 'nameHeader',
      style: { width: '30%', marginRight: '20px', fontWeight: '400', fontSize: '14px', color: '#0d2832' }
    },
    {
      id: 'nameRow',
      style: { width: '30%', marginRight: '20px', fontWeight: '400', fontSize: '14px' }
    },
    {
      id: 'specialistHeader',
      style: { width: '30%', marginRight: '20px', color: '#0d2832' }
    },
    {
      id: 'specialistRow',
      style: { width: '30%', marginRight: '20px' }
    },
  ]
};

export function mappedSchools(clients) {
  return clients.map((c) => {
    let leftMargin = 0;
    switch (c.agencyId) {
      case 1:
        leftMargin = 12;
        break;
      case 2:
        leftMargin = 6;
        break;
      case 3:
        leftMargin = 14;
        break;
      default:
        break;
    }
    return {
      id: c.id,
      name: {
        value: c.name,
        cellDefinition: 'nameRow'
      },
      specialist: {
        value: c.managerName ? c.managerName : '',
        cellDefinition: 'specialistRow'
      },
      acronym: {
        value: c.acronym ? c.acronym : '',
        cellDefinition: 'acronymRow'
      },
      agency: {
        value: c.logoUrl ? c.logoUrl : '',
        type: 'image',
        imgStyle: {
          height: '24px',
          marginTop: '10px',
          marginBottom: '10px',
          marginLeft: `${leftMargin}px`,
          maxWidth: '45px'
        },
        cellDefinition: 'agencyRow'
      },
      online: c.products.find(p => p.name === 'Online') ? { cellDefinition: 'onlineRow' } : { cellDefinition: 'emptyProductRow' }
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
    type: 'TextInput',
    title: 'Phone',
    id: 'phone',
    name: 'phone'
  },
  {
    type: 'DropDown',
    title: 'Agency',
    id: 'agencyId'
  },
  {
    type: 'DropDown',
    title: 'Specialist',
    id: 'specialistId'
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

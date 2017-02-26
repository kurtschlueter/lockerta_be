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
        { field: 'logo', title: '', headerDefinition: 'logoHeader'},
        { field: 'name', title: 'SCHOOL', headerDefinition: 'nameHeader', ascending: true },
        { field: 'nickname', title: 'MASCOT', headerDefinition: 'nameHeader'},
        { field: 'city', title: 'CITY', headerDefinition: 'nameHeader', ascending: false },
        { field: 'state', title: 'STATE', headerDefinition: 'nameHeader', ascending: false },
        { field: 'website', title: 'WEBSITE', headerDefinition: 'nameHeader'},
  ],
  cells: [
    {
      id: 'nameHeader',
      style: { width: '30%', marginRight: '20px', fontWeight: '400', fontSize: '24px', color: 'red' }
    },
    {
      id: 'nameRow',
      style: { width: '30%', marginRight: '20px', fontWeight: '400', fontSize: '14px', color: 'red'}
    },
    {
      id: 'logoHeader',
      style: { width: '10%', marginRight: '20px' }
    },
    {
      id: 'logoRow',
      style: { width: '10%', marginRight: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }
    },
  ]
};




export function mappedSchools(schools) {
  return schools.map((school) => {
    let leftMargin = 12;
    return {
      id: school.id,
      logo: {
        value: school.logo ? school.logo : '',
        type: 'image',
        imgStyle: {
          height: '24px',
          marginTop: '10px',
          marginBottom: '10px',
          marginLeft: `${leftMargin}px`,
          maxWidth: '45px'
        },
        cellDefinition: 'logoRow'
      },
      name: {
        value: school.name ? school.name : '',
        cellDefinition: 'nameRow'
      },
      nickname: {
        value: school.nickname ? school.nickname : '',
        cellDefinition: 'nameRow'
      },
      website: {
        value: school.website ? school.website : '',
        cellDefinition: 'nameRow'
      },
      state: {
        value: school.state ? school.state : '',
        cellDefinition: 'nameRow'
      },
      city: {
        value: school.city ? school.city : '',
        cellDefinition: 'nameRow'
      },
      population: {
        value: school.population ? school.population : '',
        cellDefinition: 'nameRow'
      },
      male_population: {
        value: school.male_population ? school.male_population : '',
        cellDefinition: 'nameRow'
      },
      female_population: {
        value: school.female_population ? school.female_population : '',
        cellDefinition: 'nameRow'
      },
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
    title: 'Nickname',
    id: 'nickname',
    name: 'nickname'
  },
  {
    type: 'TextInput',
    title: 'Website',
    id: 'website'
  },
  {
    type: 'TextInput',
    title: 'Total Population',
    id: 'population'
  },
  {
    type: 'TextInput',
    title: 'Male Population',
    id: 'male_population'
  },
  {
    type: 'TextInput',
    title: 'Female Population',
    id: 'female_population'
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
  },
  {
    type: 'TextInput',
    title: 'Logo',
    id: 'logo',
    name: 'logo'
  },
];

const Constants = {
  save: 'save',
  delete: 'delete',
  create: 'create',
  saveManagerMessage: 'Are you sure you want to save these changes?',
  createManagerMessage: 'Are you sure you want to create this manager?',
  deleteManagerMessage: 'Are you sure you want to delete this Acc. Manager\'s profile?',
  deleteClientMessage: 'Are you sure you want to delete this School?',
  deleteReviewMessage: 'Are you sure you want to delete this Review?',
  deleteProgramMessage: 'Are you sure you want to delete this Program?',
  deleteSubMessage: 'You will not be able to undo this action later',
  saveSuccessMessage: 'Your information has been successfully saved!',
  deleteSuccessMessage: 'Account Manager has been successfully deleted!',
  deleteClientSuccessMessage: 'School has been successfully deleted!',
  deleteProgramSuccessMessage: 'Program has been successfully deleted!',
  deleteReviewSuccessMessage: 'Review has been successfully deleted!',
  createSuccessMessage: 'Account Manager successfully created!',
  createClientSuccessMessage: 'Client successfully created!',
  createProgramSuccessMessage: 'Program successfully created!',
  createReviewSuccessMessage: 'Review successfully created!',
  fileTypeErrorMessage: 'Oops, only CSV files are accepted',
  fileCountErrorMessage: 'Oops, only 1 file can be uploaded at a time',
  newAccountManagerView: 'new',
  existingAccountManagerView: 'existing',
  pagingLimit: 2000,
  states: [
    {
      name: 'Alabama',
      abbreviation: 'AL'
    },
    {
      name: 'Alaska',
      abbreviation: 'AK'
    },
    {
      name: 'American Samoa',
      abbreviation: 'AS'
    },
    {
      name: 'Arizona',
      abbreviation: 'AZ'
    },
    {
      name: 'Arkansas',
      abbreviation: 'AR'
    },
    {
      name: 'California',
      abbreviation: 'CA'
    },
    {
      name: 'Colorado',
      abbreviation: 'CO'
    },
    {
      name: 'Connecticut',
      abbreviation: 'CT'
    },
    {
      name: 'Delaware',
      abbreviation: 'DE'
    },
    {
      name: 'District Of Columbia',
      abbreviation: 'DC'
    },
    {
      name: 'Federated States Of Micronesia',
      abbreviation: 'FM'
    },
    {
      name: 'Florida',
      abbreviation: 'FL'
    },
    {
      name: 'Georgia',
      abbreviation: 'GA'
    },
    {
      name: 'Guam',
      abbreviation: 'GU'
    },
    {
      name: 'Hawaii',
      abbreviation: 'HI'
    },
    {
      name: 'Idaho',
      abbreviation: 'ID'
    },
    {
      name: 'Illinois',
      abbreviation: 'IL'
    },
    {
      name: 'Indiana',
      abbreviation: 'IN'
    },
    {
      name: 'Iowa',
      abbreviation: 'IA'
    },
    {
      name: 'Kansas',
      abbreviation: 'KS'
    },
    {
      name: 'Kentucky',
      abbreviation: 'KY'
    },
    {
      name: 'Louisiana',
      abbreviation: 'LA'
    },
    {
      name: 'Maine',
      abbreviation: 'ME'
    },
    {
      name: 'Marshall Islands',
      abbreviation: 'MH'
    },
    {
      name: 'Maryland',
      abbreviation: 'MD'
    },
    {
      name: 'Massachusetts',
      abbreviation: 'MA'
    },
    {
      name: 'Michigan',
      abbreviation: 'MI'
    },
    {
      name: 'Minnesota',
      abbreviation: 'MN'
    },
    {
      name: 'Mississippi',
      abbreviation: 'MS'
    },
    {
      name: 'Missouri',
      abbreviation: 'MO'
    },
    {
      name: 'Montana',
      abbreviation: 'MT'
    },
    {
      name: 'Nebraska',
      abbreviation: 'NE'
    },
    {
      name: 'Nevada',
      abbreviation: 'NV'
    },
    {
      name: 'New Hampshire',
      abbreviation: 'NH'
    },
    {
      name: 'New Jersey',
      abbreviation: 'NJ'
    },
    {
      name: 'New Mexico',
      abbreviation: 'NM'
    },
    {
      name: 'New York',
      abbreviation: 'NY'
    },
    {
      name: 'North Carolina',
      abbreviation: 'NC'
    },
    {
      name: 'North Dakota',
      abbreviation: 'ND'
    },
    {
      name: 'Northern Mariana Islands',
      abbreviation: 'MP'
    },
    {
      name: 'Ohio',
      abbreviation: 'OH'
    },
    {
      name: 'Oklahoma',
      abbreviation: 'OK'
    },
    {
      name: 'Oregon',
      abbreviation: 'OR'
    },
    {
      name: 'Palau',
      abbreviation: 'PW'
    },
    {
      name: 'Pennsylvania',
      abbreviation: 'PA'
    },
    {
      name: 'Puerto Rico',
      abbreviation: 'PR'
    },
    {
      name: 'Rhode Island',
      abbreviation: 'RI'
    },
    {
      name: 'South Carolina',
      abbreviation: 'SC'
    },
    {
      name: 'South Dakota',
      abbreviation: 'SD'
    },
    {
      name: 'Tennessee',
      abbreviation: 'TN'
    },
    {
      name: 'Texas',
      abbreviation: 'TX'
    },
    {
      name: 'Utah',
      abbreviation: 'UT'
    },
    {
      name: 'Vermont',
      abbreviation: 'VT'
    },
    {
      name: 'Virgin Islands',
      abbreviation: 'VI'
    },
    {
      name: 'Virginia',
      abbreviation: 'VA'
    },
    {
      name: 'Washington',
      abbreviation: 'WA'
    },
    {
      name: 'West Virginia',
      abbreviation: 'WV'
    },
    {
      name: 'Wisconsin',
      abbreviation: 'WI'
    },
    {
      name: 'Wyoming',
      abbreviation: 'WY'
    }
  ]
};

export const userListMetaData = {
  columns: [
    { field: 'name', title: 'NAME', ascending: true, headerDefinition: 'nameHeader' },
    { field: 'email', title: 'EMAIL', headerDefinition: 'emailHeader' },
    { field: 'phone', title: 'PHONE', headerDefinition: 'phoneHeader' }
  ],
  cells: [
    {
      id: 'nameHeader',
      style: { width: '36%', marginRight: '20px', marginLeft: '17px', fontWeight: '400', fontSize: '14px', color: '#0d2832' }
    },
    {
      id: 'nameRow',
      style: { width: '36%', marginRight: '20px', marginLeft: '17px', fontWeight: '400' }
    },
    {
      id: 'emailHeader',
      style: { width: '33%', marginRight: '20px', fontWeight: '400', fontSize: '14px', color: '#0d2832' }
    },
    {
      id: 'emailRow',
      style: { width: '33%', marginRight: '20px' }
    },
    {
      id: 'phoneHeader',
      style: { width: '12%', marginRight: '20px', fontWeight: '400', fontSize: '14px', color: '#0d2832' }
    },
    {
      id: 'phoneRow',
      style: { width: '12%', marginRight: '20px' }
    },
  ]
};

export default Constants;

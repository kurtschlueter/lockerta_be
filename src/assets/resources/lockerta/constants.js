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

export const reviewListMetaData = {
  columns: [
        { field: 'athlete_fname', title: 'FIRST', headerDefinition: 'nameHeader', ascending: true },
        { field: 'athlete_lname', title: 'LAST', headerDefinition: 'nameHeader', ascending: true },
        { field: 'name', title: 'SCHOOL', headerDefinition: 'nameHeader', ascending: false },
        { field: 'sport', title: 'TEAM', headerDefinition: 'nameHeader', ascending: false },
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




export function mappedReviews(reviews) {
  return reviews.map((review) => {
    let leftMargin = 12;
    return {
      id: review.id,
      name: {
        value: review.name ? review.name : '',
        cellDefinition: 'nameRow'
      },
      sport: {
        value: review.sport ? review.sport : '',
        cellDefinition: 'nameRow'
      },
      athlete_fname: {
        value: review.athlete_fname ? review.athlete_fname : '',
        cellDefinition: 'nameRow'
      },
      athlete_lname: {
        value: review.athlete_lname ? review.athlete_lname : '',
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


export const reviewDetailInformationTabElements = [
  {
    type: 'TextInput',
    title: 'First Name',
    id: 'athlete_fname',
    name: 'athlete_fname'
  },
  {
    type: 'TextInput',
    title: 'Last Name',
    id: 'athlete_lname',
    name: 'nickname'
  },
  {
    type: 'TextInput',
    title: 'Jersey No.',
    id: 'athlete_jersey_no'
  },
  {
    type: 'TextInput',
    title: 'Email',
    id: 'athlete_email'
  },
  {
    type: 'TextInput',
    title: 'Best Teammate',
    id: 'best_teammate'
  },
  {
    type: 'TextInput',
    title: 'Best Conf Player',
    id: 'best_conf_player'
  },
  {
    type: 'TextInput',
    title: 'Rival',
    id: 'team_rival',
    name: 'team_rival'
  },
  {
    type: 'TextInput',
    title: 'Toughest Arena',
    id: 'toughest_arena',
    name: 'toughest_arena'
  },
  {
    type: 'TextInput',
    title: 'Head Coach',
    id: 'head_coach_name',
    name: 'head_coach_name'
  },
  {
    type: 'TextInput',
    title: 'Recruiting',
    id: 'recruiting_rating',
    name: 'recruiting_rating'
  },
  {
    type: 'TextInput',
    title: 'Relationships',
    id: 'relationships_rating',
    name: 'relationships_rating'
  },
  {
    type: 'TextInput',
    title: 'Development',
    id: 'development_rating',
    name: 'development_rating'
  },
  {
    type: 'TextInput',
    title: 'Coach Knowledge',
    id: 'knowledge_sport_rating',
    name: 'knowledge_sport_rating'
  },
  {
    type: 'TextInput',
    title: 'Program Tradition',
    id: 'program_tradition_rating',
    name: 'program_tradition_rating'
  },
  {
    type: 'TextInput',
    title: 'Arena',
    id: 'arena_rating',
    name: 'arena_rating'
  },
  {
    type: 'TextInput',
    title: 'Home Crowds',
    id: 'home_crowds_rating',
    name: 'home_crowds_rating'
  },
  {
    type: 'TextInput',
    title: 'Weight Room',
    id: 'weight_room_rating',
    name: 'weight_room_rating'
  },
  {
    type: 'TextInput',
    title: 'Locker Room',
    id: 'locker_room_rating',
    name: 'locker_room_rating'
  },
  {
    type: 'TextInput',
    title: 'Training Room',
    id: 'training_room_rating',
    name: 'training_room_rating'
  },
  {
    type: 'TextInput',
    title: 'Class Difficulty',
    id: 'class_difficulty_rating',
    name: 'class_difficulty_rating'
  },
  {
    type: 'TextInput',
    title: 'Academic Reputation',
    id: 'academic_rep_rating',
    name: 'academic_rep_rating'
  },
  {
    type: 'TextInput',
    title: 'Tutors',
    id: 'tutors_rating',
    name: 'tutors_rating'
  },
  {
    type: 'TextInput',
    title: 'Weather',
    id: 'weather_rating',
    name: 'weather_rating'
  },
  {
    type: 'TextInput',
    title: 'Nightlife',
    id: 'nightlife_rating',
    name: 'nightlife_rating'
  },
  {
    type: 'TextInput',
    title: 'Fans',
    id: 'fan_rating',
    name: 'fan_rating'
  },
  {
    type: 'TextInput',
    title: 'Graduated',
    id: 'graduate',
    name: 'graduate'
  },
  {
    type: 'TextInput',
    title: 'Comments',
    id: 'comments',
    name: 'comments'
  },
  {
    type: 'TextInput',
    title: 'School',
    id: 'name',
    name: 'name'
  },
  {
    type: 'TextInput',
    title: 'Sport',
    id: 'sport',
    name: 'sport'
  },
];


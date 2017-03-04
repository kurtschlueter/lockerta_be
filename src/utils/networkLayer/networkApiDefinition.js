import { httpMethods } from './httpMethods';

const basePaths = require('./../../assets/resources/' + process.env.RESOURCES + '/constants.js').basePaths;

const basicHeaders = {
  'Content-Type': 'application/json'
};

// ******* Schools **********

export function getSchoolDefinition(id) {
  // console.log('getSchoolDefinition', id)
  return {
    method: httpMethods.GET,
    headers: basicHeaders,
    path: `/Test/schools/${id}`,
    basePath: 'https://ev5rn7db1a.execute-api.us-east-1.amazonaws.com'
  };
}

export function getReviewDefinition(id) {
  // console.log('getSchoolDefinition', id)
  return {
    method: httpMethods.GET,
    headers: basicHeaders,
    path: `/Test/reviews/${id}`,
    basePath: 'https://ev5rn7db1a.execute-api.us-east-1.amazonaws.com'
  };
}

export function getProgramDefinition(id) {
  // console.log('getSchoolDefinition', id)
  return {
    method: httpMethods.GET,
    headers: basicHeaders,
    path: `/Test/teams/${id}`,
    basePath: 'https://ev5rn7db1a.execute-api.us-east-1.amazonaws.com'
  };
}

export function getProgramReviewsDefinition(id) {
  // console.log('getSchoolDefinition', id)
  return {
    method: httpMethods.GET,
    headers: basicHeaders,
    path: `/Test/teams/${id}/reviews`,
    basePath: 'https://ev5rn7db1a.execute-api.us-east-1.amazonaws.com'
  };
}

export function searchSchoolsDefinition(term) {
  // console.log('getSchoolDefinition', term)
  return {
    method: httpMethods.GET,
    headers: basicHeaders,
    path: `/Test/schools/search/${term}`,
    basePath: 'https://ev5rn7db1a.execute-api.us-east-1.amazonaws.com'
  };
}

export function searchProgramsDefinition(term) {
  // console.log('getSchoolDefinition', term)
  return {
    method: httpMethods.GET,
    headers: basicHeaders,
    path: `/Test/teams/search/${term}`,
    basePath: 'https://ev5rn7db1a.execute-api.us-east-1.amazonaws.com'
  };
}

export function searchProgramReviewsDefinition(id, term) {
  // console.log('SEARCH PROGRAM REVIEWS DEFINITION', id, term)
  return {
    method: httpMethods.GET,
    headers: basicHeaders,
    path: `/Test/teams/${id}/reviews/search/${term}`,
    basePath: 'https://ev5rn7db1a.execute-api.us-east-1.amazonaws.com'
  };
}

export function searchReviewsDefinition(term) {
  // console.log('getSchoolDefinition', term)
  return {
    method: httpMethods.GET,
    headers: basicHeaders,
    path: `/Test/reviews/search/${term}`,
    basePath: 'https://ev5rn7db1a.execute-api.us-east-1.amazonaws.com'
  };
}

// export function getSchoolDefinition(id) {
//   return {
//     method: httpMethods.GET,
//     headers: basicHeaders,
//     path: `/UserManagement/client/${id}`,
//     basePath: basePaths.userManagement[process.env.STAGE]
//   };
// }


export function getSchoolsDefinition() {
  return {
    method: httpMethods.GET,
    headers: basicHeaders,
    path: '/Test/schools',
    basePath: 'https://ev5rn7db1a.execute-api.us-east-1.amazonaws.com'
  };
}

export function getReviewsDefinition() {
  return {
    method: httpMethods.GET,
    headers: basicHeaders,
    path: '/Test/reviews',
    basePath: 'https://ev5rn7db1a.execute-api.us-east-1.amazonaws.com'
  };
}

export function getProgramsDefinition() {
  return {
    method: httpMethods.GET,
    headers: basicHeaders,
    path: '/Test/teams',
    basePath: 'https://ev5rn7db1a.execute-api.us-east-1.amazonaws.com'
  };
}

export function postSchoolDefinition(school) {
  return {
    method: httpMethods.POST,
    headers: basicHeaders,
    path: `/Test/schools`,
    basePath: 'https://ev5rn7db1a.execute-api.us-east-1.amazonaws.com',
    body: JSON.stringify({
      name: school.name,
      nickname: school.nickname,
      website: school.website,
      population: school.population,
      male_population: school.male_population,
      female_population: school.female_population,
      state: school.state,
      city: school.city,
      is_hidden: school.is_hidden,
      is_deleted: school.is_deleted,
      logo: school.logo
    })
  };
}

export function postReviewDefinition(review) {
  return {
    method: httpMethods.POST,
    headers: basicHeaders,
    path: `/Test/reviews`,
    basePath: 'https://ev5rn7db1a.execute-api.us-east-1.amazonaws.com',
    body: JSON.stringify({
      // will need to update team and school id, but can't do it yet
      team_id: 1,
      school_id: 1,
      athlete_fname: review.athlete_fname,
      athlete_lname: review.athlete_lname,
      athlete_jersey_no: review.athlete_jersey_no,
      athlete_email: review.athlete_email,
      best_teammate: review.best_teammate,
      best_conf_player: review.best_conf_player,
      team_rival: review.team_rival,
      toughest_arena: review.toughest_arena,
      head_coach_name: review.head_coach_name,
      recruiting_rating: review.recruiting_rating,
      relationships_rating: review.relationships_rating,
      development_rating: review.development_rating,
      knowledge_sport_rating: review.knowledge_sport_rating,
      program_tradition_rating: review.program_tradition_rating,
      arena_rating: review.arena_rating,
      home_crowds_rating: review.home_crowds_rating,
      weight_room_rating: review.weight_room_rating,
      locker_room_rating: review.locker_room_rating,
      training_room_rating: review.training_room_rating,
      class_difficulty_rating: review.class_difficulty_rating,
      academic_rep_rating: review.academic_rep_rating,
      tutors_rating: review.tutors_rating,
      weather_rating: review.weather_rating,
      nightlife_rating: review.nightlife_rating,
      fan_rating: review.fan_rating,
      play_for_coach_again: review.play_for_coach_again,
      graduate: review.graduate,
      comments: review.comments,
      is_hidden: review.is_hidden,
      is_deleted: review.is_deleted
    })
  };
}

export function postProgramDefinition(program) {
  return {
    method: httpMethods.POST,
    headers: basicHeaders,
    path: `/Test/teams`,
    basePath: 'https://ev5rn7db1a.execute-api.us-east-1.amazonaws.com',
    body: JSON.stringify({
      // will need to update team and school id, but can't do it yet
      sport: program.sport,
      division: program.division,
      conference: program.conference,
      gear: program.gear,
      last_season_record: program.last_season_record,
      national_titles: program.national_titles,
      conference_titles: program.conference_titles,
      projected_openings: program.projected_openings,
      coach_fname: program.coach_fname,
      coach_lname: program.coach_lname,
      coach_last_record: program.coach_last_record,
      coach_school_record: program.coach_school_record,
      coach_alma_mater: program.coach_alma_mater,
      coach_year_started: program.coach_year_started,
      coach_win_percent: program.coach_win_percent,
      coach_seasons_w_team: program.coach_seasons_w_team,
      coach_ncaa_appearances: program.coach_ncaa_appearances,
      coach_conf_championships: program.coach_conf_championships,
      facilities_arena_name: program.facilities_arena_name,
      facilities_arena_built: program.facilities_arena_built,
      facilities_capacity: program.facilities_capacity,
      facilities_home_attendance: program.facilities_home_attendance,
      education_cost: program.education_cost,
      education_enrollment: program.education_enrollment,
      education_graduation_rate: program.education_graduation_rate,
      school_id: 1,
      is_hidden: program.is_hidden,
      is_deleted: program.is_deleted
    })
  };
}

export function deleteSchoolDefinition(school) {
  // debugger
  return {
    method: httpMethods.DELETE,
    headers: basicHeaders,
    path: `/Test/schools/${school.id}`,
    basePath: 'https://ev5rn7db1a.execute-api.us-east-1.amazonaws.com',
  };
}

export function deleteReviewDefinition(review) {
  // debugger
  return {
    method: httpMethods.DELETE,
    headers: basicHeaders,
    path: `/Test/reviews/${review.id}`,
    basePath: 'https://ev5rn7db1a.execute-api.us-east-1.amazonaws.com',
  };
}

export function deleteProgramDefinition(program) {
  // debugger
  return {
    method: httpMethods.DELETE,
    headers: basicHeaders,
    path: `/Test/teams/${program.id}`,
    basePath: 'https://ev5rn7db1a.execute-api.us-east-1.amazonaws.com',
  };
}

export function putSchoolDefinition(school) {
  // debugger
  return {
    method: httpMethods.POST,
    headers: basicHeaders,
    path: `/Test/schools/${school.id}`,
    basePath: 'https://ev5rn7db1a.execute-api.us-east-1.amazonaws.com',
    body: JSON.stringify({
      name: school.name,
      nickname: school.nickname,
      website: school.website,
      population: school.population,
      male_population: school.male_population,
      female_population: school.female_population,
      state: school.state,
      city: school.city,
      is_hidden: school.is_hidden,
      is_deleted: 0,
      logo: school.logo
    })
  };
}

export function putReviewDefinition(review) {
  // debugger
  return {
    method: httpMethods.POST,
    headers: basicHeaders,
    path: `/Test/reviews/${review.id}`,
    basePath: 'https://ev5rn7db1a.execute-api.us-east-1.amazonaws.com',
    body: JSON.stringify({
      school_id: review.school_id,
      team_id: review.team_id,
      athlete_fname: review.athlete_fname,
      athlete_lname: review.athlete_lname,
      athlete_jersey_no: review.athlete_jersey_no,
      athlete_email: review.athlete_email,
      best_teammate: review.best_teammate,
      best_conf_player: review.best_conf_player,
      team_rival: review.team_rival,
      toughest_arena: review.toughest_arena,
      head_coach_name: review.head_coach_name,
      recruiting_rating: review.recruiting_rating,
      relationships_rating: review.relationships_rating,
      development_rating: review.development_rating,
      knowledge_sport_rating: review.knowledge_sport_rating,
      program_tradition_rating: review.program_tradition_rating,
      arena_rating: review.arena_rating,
      home_crowds_rating: review.home_crowds_rating,
      weight_room_rating: review.weight_room_rating,
      locker_room_rating: review.locker_room_rating,
      training_room_rating: review.training_room_rating,
      class_difficulty_rating: review.class_difficulty_rating,
      academic_rep_rating: review.academic_rep_rating,
      tutors_rating: review.tutors_rating,
      weather_rating: review.weather_rating,
      nightlife_rating: review.nightlife_rating,
      fan_rating: review.fan_rating,
      play_for_coach_again: review.play_for_coach_again,
      graduate: review.graduate,
      comments: review.comments,
      is_hidden: review.is_hidden,
      is_deleted: review.is_deleted
    })
  };
}

export function putProgramDefinition(program) {
  // debugger
  return {
    method: httpMethods.POST,
    headers: basicHeaders,
    path: `/Test/teams/${program.id}`,
    basePath: 'https://ev5rn7db1a.execute-api.us-east-1.amazonaws.com',
    body: JSON.stringify({
      sport: program.sport,
      division: program.division,
      conference: program.conference,
      gear: program.gear,
      last_season_record: program.last_season_record,
      national_titles: program.national_titles,
      conference_titles: program.conference_titles,
      projected_openings: program.projected_openings,
      coach_fname: program.coach_fname,
      coach_lname: program.coach_lname,
      coach_last_record: program.coach_last_record,
      coach_school_record: program.coach_school_record,
      coach_alma_mater: program.coach_alma_mater,
      coach_year_started: program.coach_year_started,
      coach_win_percent: program.coach_win_percent,
      coach_seasons_w_team: program.coach_seasons_w_team,
      coach_ncaa_appearances: program.coach_ncaa_appearances,
      coach_conf_championships: program.coach_conf_championships,
      facilities_arena_name: program.facilities_arena_name,
      facilities_arena_built: program.facilities_arena_built,
      facilities_capacity: program.facilities_capacity,
      facilities_home_attendance: program.facilities_home_attendance,
      education_cost: program.education_cost,
      education_enrollment: program.education_enrollment,
      education_graduation_rate: program.education_graduation_rate,
      school_id: program.school_id,
      is_hidden: program.is_hidden,
      is_deleted: program.is_deleted
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

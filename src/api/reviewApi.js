import networkClient from '../utils/networkLayer/NetworkClient';
import {
  getSchoolDefinition,
  getSchoolsDefinition,
  getReviewsDefinition,
  getReviewDefinition,
  postSchoolDefinition,
  putSchoolDefinition,
  searchSchoolsDefinition,
  deleteSchoolDefinition,
  uploadCSVDefiniton
} from '../utils/networkLayer/networkApiDefinition';


export function getReview(id) {
  // console.log('getSchool api', id)
  const review = networkClient.observableClient(getReviewDefinition(id));
  return review;
}

export function getReviews() {
  // console.log('getClients api data')
  const review = networkClient.observableClient(getReviewsDefinition());
  return review;
}

export function getSearchedSchools(query) {
  // console.log('getClients api data')
  const client = networkClient.observableClient(searchSchoolsDefinition(query));
  return client;
}

export function postSchool(school) {
  return networkClient.observableClient(postSchoolDefinition(school));
}

export function putSchool(school) {
  return networkClient.observableClient(putSchoolDefinition(school))
}


export function deleteSchool(school) {
  return networkClient.observableClient(deleteSchoolDefinition(school))
}

export function uploadCSVFiles(csv) {
  return networkClient.observableClient(uploadCSVDefiniton(csv))
}

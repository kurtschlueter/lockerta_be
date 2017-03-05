import networkClient from '../utils/networkLayer/NetworkClient';
import {
  getSchoolDefinition,
  getSchoolsDefinition,
  getReviewsDefinition,
  getReviewDefinition,
  postReviewDefinition,
  putReviewDefinition,
  searchReviewsDefinition,
  deleteReviewDefinition,
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

export function getSearchedReviews(query) {
  // console.log('getClients api data')
  const client = networkClient.observableClient(searchReviewsDefinition(query));
  return client;
}

export function postReview(review) {
  return networkClient.observableClient(postReviewDefinition(review));
}

export function putReview(review) {
  return networkClient.observableClient(putReviewDefinition(review))
}


export function deleteReview(review) {
  return networkClient.observableClient(deleteReviewDefinition(review))
}

export function uploadCSVFiles(csv) {
  return networkClient.observableClient(uploadCSVDefiniton(csv))
}

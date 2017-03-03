import {
  HIDE_NEW_MANAGER_BUTTON,
  SHOW_NEW_MANAGER_BUTTON,
  HIDE_NEW_CLIENT_BUTTON,
  SHOW_NEW_CLIENT_BUTTON,
  HIDE_NEW_REVIEW_BUTTON,
  SHOW_NEW_REVIEW_BUTTON
} from './actionTypes';

export function hideNewManagerButton() {
  return {
    type: HIDE_NEW_MANAGER_BUTTON
  }
}
export function showNewManagerButton() {
  return {
    type: SHOW_NEW_MANAGER_BUTTON
  }
}
export function hideNewClientButton() {
  return {
    type: HIDE_NEW_CLIENT_BUTTON
  }
}
export function showNewClientButton() {
  return {
    type: SHOW_NEW_CLIENT_BUTTON
  }
}
export function hideNewReviewButton() {
  return {
    type: HIDE_NEW_REVIEW_BUTTON
  }
}
export function showNewReviewButton() {
  return {
    type: SHOW_NEW_REVIEW_BUTTON
  }
}

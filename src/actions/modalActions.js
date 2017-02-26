import {
  SHOW_MODAL,
  CONFIRMED,
  NO_MODAL,

} from './actionTypes.js'

export function showModal(data) {
  return {
    type: SHOW_MODAL,
    data
  }
}
export function confirmed() {
  return {
    type: CONFIRMED
  }
}
export function noModal() {
  return {
    type: NO_MODAL
  }
}

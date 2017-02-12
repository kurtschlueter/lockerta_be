import { TEST_ACTION } from './actionTypes';

export function testAction(data) {
  return {
    type: TEST_ACTION,
    data
  };
}

export const dispatchTest = data => (dispatch) => {
  dispatch(testAction(data));
};

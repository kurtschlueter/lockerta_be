import { TEST_ACTION } from '../actions/actionTypes.js';

export default function testReducer(state = { testString: 'test initial state' }, action) {
  switch (action.type) {
    case TEST_ACTION:
      {
        return Object.assign({}, state, { test: action.data });
      }
    default:
      {
        return state;
      }
  }
}

import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  list: [{
    username: 'alice',
    displayName: 'Alice Beeblebrox',
  }, {
    username: 'bob',
    displayName: 'Bob Beeblebrox',
  }, {
    username: 'carol',
    displayName: 'Carol Cottington',
  }, {
    username: 'diane',
    displayName: 'Diane Dent',
  }, {
    username: 'ed',
    displayName: 'Ed Beeblebrox',
  }],
});

function userssReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

    default:
      return state;
  }
}


export default userssReducer;

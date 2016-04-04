import { fromJS } from 'immutable';

export const ADD_TASK = '@@reactTraining/ADD_TASK';
export const DELETE_TASK = '@@reactTraining/DELETE_TASK';

const INITIAL_STATE = fromJS({
  list: [{
    user: 'Alice Beeblebrox',
    description: 'Learn ReactJS',
  }],
  user: null,
  description: '',
});

function tasksReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case ADD_TASK:
      return state.set('list', state.get('list').push(action.payload));

    case DELETE_TASK:
      return state.set('list', state.get('list').filter((task) => {
        return task.id === action.payload;
      }));

    default:
      return state;
  }
}

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task,
  };
}

export function deleteTask(id) {
  return {};
}

export default tasksReducer;

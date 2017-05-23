import {RECEIVE_STATUS} from '../actions/statusActions';

const statusReducer = (state = false, action ) => {
  switch (action.type) {
    case RECEIVE_STATUS:
      return action.status;
    default:
      return state;
  }
};

export default statusReducer;

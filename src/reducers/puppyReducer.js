import { RECEIVE_PUPPIES, RECEIVE_PUPPY } from '../actions/puppyActions';

const puppyReducer = (state = [], action) => {
  // console.log(action);
    switch (action.type) {
    case RECEIVE_PUPPIES:
      return action.puppies;
    case RECEIVE_PUPPY:
      return action.puppy;
    default:
      return state;
  }
};

export default puppyReducer;

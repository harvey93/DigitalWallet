import {RECEIVE_PAYMENTS} from '../actions/paymentActions';

const paymentReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PAYMENTS:
      return action.payments;
    default:
      return state;
  }
};

export default paymentReducer;

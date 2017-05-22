import {RECEIVE_PAYMENTS} from '../actions/paymentActions';

const paymentReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PAYMENTS:
      // if(action.payments.length === 1){
      //   return [action.payments];
      // }else{
        return action.payments;
      // }
    default:
      return state;
  }
};

export default paymentReducer;

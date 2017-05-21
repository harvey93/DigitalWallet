import * as APIPayments from '../utils/paymentUtil.js';
export const RECEIVE_PAYMENTS = 'RECEIVE_PAYMENTS';

export const receivePayments = (payments) => ({
  type: RECEIVE_PAYMENTS,
  payments
});

export const fetchPayments = () => dispatch => {
  // console.log('in');
  return APIPayments.getPayments()
    .then( res => {
      // console.log(res.data.data);
      dispatch(receivePayments(res.data.data));
    });
};

export const fetchUserPayments = (id) => dispatch => {
  // console.log(id);
  return APIPayments.getUserPayments(id)
    .then( res => {
      dispatch(receivePayments(res.data.data));
    });
};

export const createPayment = (id, payment) => dispatch => {
  // console.log(id);
  // console.log(payment);
  return APIPayments.createPayment(id, payment)
    .catch(err => console.log(err));
};

export const removePayment = (id) => dispatch => {
  return APIPayments.removePayment(id);
};

export const updatePayment = (id, payment) => dispatch => {
  return APIPayments.updatePayment(id, payment)
    .catch(err => console.log(err));
};

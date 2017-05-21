import * as types from '../constants/actionTypes';
import { combineReducers } from 'redux';
import puppyReducer from './puppyReducer';
import paymentReducer from './paymentReducer';

export default combineReducers({
  // puppies: puppyReducer,
  payments: paymentReducer
});

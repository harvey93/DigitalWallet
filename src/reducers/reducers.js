import * as types from '../constants/actionTypes';
import { combineReducers } from 'redux';
import puppyReducer from './puppyReducer';
import paymentReducer from './paymentReducer';
import statusReducer from './statusReducer';

export default combineReducers({
  // puppies: puppyReducer,
  payments: paymentReducer,
  status: statusReducer
});

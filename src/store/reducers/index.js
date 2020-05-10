import { combineReducers } from 'redux';
import LoanReducer from './loanReducer';
import authReducer from './authReducer';
import generalReduce from './generalReducer';

const reducers = combineReducers({
  loan: LoanReducer,
  auth: authReducer,
  general: generalReduce,
});

export default reducers;

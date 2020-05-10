import { CHECK_LOAN_APPLICATION } from '../actions/types';

const InitState = {
  loanAmount: 0,
  creditStatus: '',
};

const LoanReducer = (state = InitState, { type, payload }) => {
  switch (type) {
    case CHECK_LOAN_APPLICATION:
      return {
        ...state,
        loanAmount: payload.loanAmount,
        creditStatus: payload.creditStatus,
      };
    default:
      return state;
  }
};

export default LoanReducer;

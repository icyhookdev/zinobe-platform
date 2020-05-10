import { CHANGE_GLOBAL_BALANCE } from '../actions/types';

const initState = {
  balance: 1000000,
};

const generalReduce = (state = initState, { type, payload }) => {
  switch (type) {
    case CHANGE_GLOBAL_BALANCE:
      return { ...state, balance: payload };
    default:
      return state;
  }
};

export default generalReduce;

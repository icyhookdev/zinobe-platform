import {
  LOADING_AUTH_USER,
  END_LOADING,
  SET_USER_APPLICANT,
  SET_AUTH_USER_STATUS,
} from '../actions/types';

const initState = {
  userApplicant: {},
  loading: false,
  userAuthState: 'check-user',
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOADING_AUTH_USER:
      return { ...state, loading: true };
    case END_LOADING:
      return { ...state, loading: false };
    case SET_USER_APPLICANT:
      return { ...state, userApplicant: payload };
    case SET_AUTH_USER_STATUS:
      return { ...state, userAuthState: payload };
    default:
      return state;
  }
};

export default authReducer;

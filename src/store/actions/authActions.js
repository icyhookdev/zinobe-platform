import { v1 as uuidv1 } from 'uuid';
import {
  LOADING_AUTH_USER,
  END_LOADING,
  SET_USER_APPLICANT,
  SET_AUTH_USER_STATUS,
  CHANGE_GLOBAL_BALANCE,
} from './types';

import axios from '../../../axios';

export const onCheckUserIdn = idn => async (dispatch, getState) => {
  dispatch({ type: LOADING_AUTH_USER });
  try {
    const { data } = await axios.get('/users');
    const user = data.find(
      singleUser => singleUser.idn === idn.replace(/\./g, '')
    );

    dispatch({ type: SET_USER_APPLICANT, payload: user });

    if (user) {
      const { auth, loan } = getState();
      const credit = {
        id: uuidv1(),
        creditStatus: loan.creditStatus,
        amount: loan.loanAmount.replace(/\./g, ''),
        paid: 'no',
        userId: auth.userApplicant.id,
      };
      await axios.post('/credits', credit);
      dispatch({ type: SET_AUTH_USER_STATUS, payload: 'create-loan' });
    } else {
      dispatch({ type: SET_AUTH_USER_STATUS, payload: 'create-user' });
    }

    dispatch({ type: END_LOADING });
  } catch (error) {
    dispatch({ type: END_LOADING });
    console.log(error);
  }
};

export const onRegisterUser = (user, credits) => async (dispatch, getState) => {
  dispatch({ type: LOADING_AUTH_USER });
  try {
    const { data } = await axios.post('/users', user);
    const reqCredits = await axios.post('/credits', credits);

    const fullData = {
      ...data,
      ...reqCredits.data,
    };

    const { general } = getState();

    if (fullData.creditStatus === 'Aprobado') {
      dispatch({
        type: CHANGE_GLOBAL_BALANCE,
        payload: general.balance - +fullData.amount.replace(/\./g, ''),
      });
    }

    dispatch({ type: SET_USER_APPLICANT, payload: fullData });
    dispatch({ type: SET_AUTH_USER_STATUS, payload: 'created-user' });
    dispatch({ type: END_LOADING });
  } catch (error) {
    dispatch({ type: END_LOADING });
    console.log(error);
  }
};

export const resetAuthUserStatus = () => ({
  type: SET_AUTH_USER_STATUS,
  payload: 'check-user',
});

export const setUserApplicant = user => ({
  type: SET_USER_APPLICANT,
  payload: user,
});

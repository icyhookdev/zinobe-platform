import { CHANGE_GLOBAL_BALANCE } from './types';

export const onReduceBalance = amount => getState => ({
  type: CHANGE_GLOBAL_BALANCE,
  payload: getState().general.balancce - +amount.replace(/\./g, ''),
});

export const onAddBalance = amount => getState => ({
  type: CHANGE_GLOBAL_BALANCE,
  payload: getState().general.balancce + +amount.replace(/\./g, ''),
});

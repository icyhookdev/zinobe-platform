import { CHECK_LOAN_APPLICATION } from './types';

export const onSetLoanValue = loanAmount => {
  const creditStatus = Math.round(Math.random() * 10) % 2;
  const payload = {
    creditStatus: creditStatus === 0 ? 'Aprobado' : 'Rechazado',
    loanAmount,
  };
  return {
    type: CHECK_LOAN_APPLICATION,
    payload,
  };
};

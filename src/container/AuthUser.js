import React, { useState } from 'react';
import { connect } from 'react-redux';
import useCurrencyInput from '../hooks/useCurrencyInput';
import CheckUser from '../components/CheckUser/CheckUser';
import { onCheckUserIdn } from '../store/actions/authActions';
import AddUser from './AddUser';
import CreatedUser from '../components/CreatedUser/CreatedUser';
import AddCredit from '../components/AddCredit/AddCredit';

const Authuser = ({
  onCheckUserIdn: handleCheckUserIdn,
  isRegistered,
  authUserState,
  loadingCheckUser,
  loanCredits,
}) => {
  const { currencyValue, onChangeCurrency } = useCurrencyInput(10);
  const [idnError, setIdnError] = useState('');

  const validateIdn = () => {
    if (!currencyValue) {
      setIdnError('Ingresa el numero de cedula');
      return;
    }
    handleCheckUserIdn(currencyValue);
  };

  if (authUserState === 'check-user') {
    return (
      <CheckUser
        currencyValue={currencyValue}
        onChangeCurrency={onChangeCurrency}
        onValidateIdn={validateIdn}
        loading={loadingCheckUser}
        idnError={idnError}
      />
    );
  }

  if (authUserState === 'create-user') {
    return <AddUser idn={currencyValue} />;
  }

  if (authUserState === 'create-loan') {
    return <AddCredit user={{ ...isRegistered, ...loanCredits }} />;
  }

  if (authUserState === 'created-user') {
    return <CreatedUser user={{ ...isRegistered }} />;
  }
};

const mapStateToProps = ({ auth, loan }) => ({
  isRegistered: auth.userApplicant,
  loadingCheckUser: auth.loading,
  authUserState: auth.userAuthState,
  loanCredits: loan,
});

export default connect(mapStateToProps, { onCheckUserIdn })(Authuser);

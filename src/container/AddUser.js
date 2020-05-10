import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { checkInputValue } from '../helper';
import { onRegisterUser } from '../store/actions/authActions';
import NewUser from '../components/NewUser/NewUser';

const AddUser = ({
  idn,
  creditStatus,
  loanAmount,
  onRegisterUser: handleRegisterUser,
  loading,
}) => {
  const name = useInput('');
  const email = useInput('');
  const [errors, setErrors] = useState({ name: '', email: '' });
  const emailRgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onSubmit = e => {
    e.preventDefault();
    if (!name.inputValue || !email.inputValue) {
      setErrors({
        ...errors,
        name: checkInputValue(name.inputValue),
        email: checkInputValue(email.inputValue),
      });
      return;
    }

    if (!emailRgx.test(email.inputValue)) {
      setErrors({
        ...errors,
        email: 'Ingrese un correo valido',
      });
      return;
    }

    const user = {
      id: uuidv1(),
      name: name.inputValue,
      email: email.inputValue,
      idn: idn.replace(/\./g, ''),
      canApplyForCredit: creditStatus.includes('Aprovado'),
    };

    const credit = {
      id: uuidv1(),
      creditStatus,
      amount: loanAmount.replace(/\./g, ''),
      paid: 'no',
      userId: user.id,
    };

    handleRegisterUser(user, credit);
  };

  return (
    <NewUser
      onSubmit={onSubmit}
      email={email}
      name={name}
      errors={errors}
      idn={idn}
      loading={loading}
    />
  );
};

const mapStateToProps = ({ loan, auth }) => ({
  creditStatus: loan.creditStatus,
  loanAmount: loan.loanAmount,
  loading: auth.loading,
});

AddUser.propTypes = {
  idn: PropTypes.string,
  creditStatus: PropTypes.string,
  loanAmount: PropTypes.string,
  onRegisterUser: PropTypes.func,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps, { onRegisterUser })(AddUser);

import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import { Text, TextColored } from '../../styles/SharedStyles';
import Button from '../Button/Button';
import { resetAuthUserStatus } from '../../store/actions/authActions';

const AddCredit = ({ user, resetAuthUserStatus: onResetAuthStatus }) => (
  <>
    <Text mb>
      El Prestamo para {user.name} ha sido{' '}
      <TextColored option={user.creditStatus}>{user.creditStatus} </TextColored>
    </Text>
    <Button
      text="Continuar"
      clicked={() => {
        navigate('/users');
        onResetAuthStatus();
      }}
    />
  </>
);

AddCredit.propTypes = {
  user: PropTypes.object,
  resetAuthUserStatus: PropTypes.func,
};

export default connect(null, { resetAuthUserStatus })(AddCredit);

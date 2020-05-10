import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import { Text, TextColored } from '../../styles/SharedStyles';
import Button from '../Button/Button';

const CreatedUser = ({ user }) => (
  <>
    <Text mb>
      El prestamo de {user.name} fue{' '}
      <TextColored option={user.creditStatus}>{user.creditStatus} </TextColored>
      por un Monto de ${new Intl.NumberFormat('de-DE').format(user.amount)}
    </Text>
    <Button text="Continuar" clicked={() => navigate('/users')} />
  </>
);

CreatedUser.propTypes = {
  user: PropTypes.object,
};

export default CreatedUser;

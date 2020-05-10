import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import { CardWrapper, UserName, CardText, CardButton } from './Card.style';

const Card = ({ name, email, idn, id }) => (
  <CardWrapper>
    <UserName>{name}</UserName>
    <CardText>{email}</CardText>
    <CardText>{idn}</CardText>
    <CardButton onClick={() => navigate(`/history/${id}`)}>
      Historial
    </CardButton>
  </CardWrapper>
);

Card.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  idn: PropTypes.string,
  id: PropTypes.string,
};

export default Card;

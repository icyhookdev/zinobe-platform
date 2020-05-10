import React from 'react';
import PropTypes from 'prop-types';
import { CardWrapper, CardText, UserName } from '../Card/Card.style';

const HistoryCard = ({ amount, creditStatus, paid }) => (
  <CardWrapper>
    <UserName>{creditStatus}</UserName>
    <CardText>Monto: ${new Intl.NumberFormat('de-DE').format(amount)}</CardText>
    <CardText>Pago: {paid}</CardText>
  </CardWrapper>
);

HistoryCard.propTypes = {
  amount: PropTypes.string,
  creditStatus: PropTypes.string,
  paid: PropTypes.string,
};

export default HistoryCard;

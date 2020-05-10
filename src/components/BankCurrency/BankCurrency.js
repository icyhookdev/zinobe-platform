import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  BankCurrencyWrapper,
  BankAmount,
  BankIcon,
} from './BankCurrency.style';

const BankCurrency = ({ balance }) => (
  <BankCurrencyWrapper>
    <BankIcon />
    <BankAmount>{new Intl.NumberFormat('de-DE').format(balance)}</BankAmount>
  </BankCurrencyWrapper>
);

BankCurrency.propTypes = {
  balance: PropTypes.number,
};

const mapStateToProps = ({ general }) => ({ balance: general.balance });

export default connect(mapStateToProps)(BankCurrency);

import React from 'react';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './Button.style';

const Button = ({ loading, text, type, clicked }) => (
  <ButtonWrapper disabled={loading} type={type} onClick={clicked}>
    {loading ? (
      <ReactLoading type="spin" color="#fff" height={20} width={20} />
    ) : (
        text
      )}
  </ButtonWrapper>
);

Button.propTypes = {
  loading: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.string,
  clicked: PropTypes.func,
};

export default Button;

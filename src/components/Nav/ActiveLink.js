import React from 'react';
import PropTypes from 'prop-types';
import { Link } from './Nav.style';

const ActiveLink = ({ to, children }) => (
  <Link
    to={to}
    getProps={({ isCurrent }) => ({
      style: {
        color: isCurrent ? '#222' : '#ddd',
      },
    })}
  >
    {children}
  </Link>
);

ActiveLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

export default ActiveLink;

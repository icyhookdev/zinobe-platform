import PropTypes from 'prop-types';
import React from 'react';
import { LayoutWrapper, LayoutContent } from './Layout.style';
import Nav from '../Nav/Nav';

const Layout = ({ children }) => (
  <LayoutWrapper>
    <Nav />
    <LayoutContent>{children}</LayoutContent>
  </LayoutWrapper>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;

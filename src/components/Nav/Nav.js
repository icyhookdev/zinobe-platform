import React from 'react';
import { navigate } from '@reach/router';
import { NavWrapper, Brand, Links } from './Nav.style';
import BankCurrency from '../BankCurrency/BankCurrency';
import ActiveLink from './ActiveLink';

const Nav = () => (
  <NavWrapper>
    <Brand onClick={() => navigate('/')}>ZL</Brand>
    <Links>
      <li>
        <ActiveLink to="/users">Usuarios</ActiveLink>
      </li>
      <li>
        <BankCurrency />
      </li>
    </Links>
  </NavWrapper>
);

export default Nav;

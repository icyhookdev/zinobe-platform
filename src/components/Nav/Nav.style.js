import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const NavWrapper = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  padding: 0 1rem;
  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`;

export const Brand = styled.div`
  font-size: 2.2rem;
  font-family: sans-serif;
  font-weight: bold;
  color: #6445fc;
  cursor: pointer;
`;

export const Links = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  li {
    margin-right: 1rem;
  }
`;

export const Link = styled(LinkRouter)`
  outline: 0;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bold;
  color: #ddd;
  transition: ease all 0.3s;
  cursor: pointer;
`;

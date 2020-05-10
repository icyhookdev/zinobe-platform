import styled from 'styled-components';
import bankIcon from '../../assets/bankIcon.svg';

export const BankIcon = styled.div`
  margin-right: 1rem;
  background: url(${bankIcon});
  background-size: cover;
  height: 25px;
  width: 25px;
`;

export const BankCurrencyWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BankAmount = styled.div`
  font-size: 1.8rem;
  color: #6445fc;
  font-weight: bold;
`;

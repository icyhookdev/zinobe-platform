import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 360px;
  min-height: 100px;
  background: #fff;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
  padding: 1rem;
`;

export const UserName = styled.h3`
  font-size: 1.6rem;
  font-weight: 100;
  margin-bottom: 1rem;
  color: #222;
  font-weight: bold;
`;

export const CardText = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
`;

export const CardButton = styled.button`
  margin: 1rem 0;
  width: 100px;
  font-size: 1.3rem;
  outline: 0;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  color: #fff;
  background: #6445fc;
  box-shadow: 0 4px 14px 0 rgba(0, 118, 255, 0.39);
`;

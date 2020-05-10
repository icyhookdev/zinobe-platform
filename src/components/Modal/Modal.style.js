import styled from 'styled-components';
import closeIcon from '../../assets/closeIcon.svg';

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const ModalContent = styled.div`
  width: 100%;
  max-width: 400px;
  min-height: 350px;
  border-radius: 8px;
  background: #fff;
  padding: 2rem;
  position: relative;
`;

export const Close = styled.button`
  position: absolute;
  outline: 0;
  right: 1rem;
  top: 1rem;
  font-size: 2.2rem;
  color: #222;
  cursor: pointer;
  z-index: 1;
  height: 20px;
  width: 20px;
  background: url(${closeIcon});
  background-size: cover;
`;

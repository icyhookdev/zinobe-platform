import styled from 'styled-components';

export const InputComp = styled.input`
  width: 60%;
  margin: 3rem auto;
  padding: 1rem;
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  border: 0;
  border-bottom: 2px solid #6445fc;
  background: transparent;
  color: #6445fc;
  outline: 0;
  ::placeholder {
    color: #ddd;
    text-align: center;
  }
`;

export const InputError = styled.p`
  font-size: 1.5rem;
  color: #fa5154;
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
`;

export const InputWrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

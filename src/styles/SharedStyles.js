import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 4.2rem;
  color: #222;
  text-align: center;
  @media screen and (min-width: 1024px) {
    font-size: 72px;
  }
`;

export const PageWrapper = styled.div`
  padding: 1rem;
  margin-top: 3rem;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.h2`
  font-size: 2.2rem;
  color: #222;
  font-weight: 300;
  text-align: center;
  margin-top: 4rem;
  ${props => props.mb && 'margin-bottom: 3rem'};
`;

export const TextColored = styled.p`
  font-weight: bold;
  ${props =>
    props.option === 'Aprobado' ? 'color: #00e086' : 'color: #fa5154'}
`;

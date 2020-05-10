import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (min-width: 768px) {
    justify-content: unset;
  }
`;

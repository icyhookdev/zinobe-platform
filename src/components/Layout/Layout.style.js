import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const LayoutContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  background-image: radial-gradient(#d7d7d7 1px, transparent 1px),
    radial-gradient(#d7d7d7 1px, transparent 1px);
  background-position: 0 0, 25px 25px;
  background-size: 50px 50px;
  height: 88vh;
`;

import styled from 'styled-components';

export const LayoutMain = styled.main`
  background: ${(props) => props.theme.colors.grey.dark};
  min-height: 100vh;
`;

export const LayoutContainer = styled.div`
  padding: 1rem 0 2rem;
  max-width: 85%;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`;

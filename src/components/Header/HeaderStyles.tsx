import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1.5rem 0.75rem 1.5rem 2rem;
  background: ${(props) => props.theme.colors.grey.dark};
  color: ${(props) => props.theme.colors.white};
  border-bottom: 0.5px solid #313742;
  text-align: center;
`;

export const HeaderTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  span {
    font-weight: 300;
  }
`;

export const HeaderSlogan = styled.div`
  margin-top: 0.5rem;
  font-size: 0.7rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.teal};
`;

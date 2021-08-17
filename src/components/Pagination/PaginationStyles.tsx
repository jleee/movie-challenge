import styled from 'styled-components';

export const PaginationContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
  padding-bottom: 3rem;
`;

export const PaginationList = styled.li`
  display: inline-block;
  padding: 0 0.25rem;
`;

export const PaginationButton = styled.button<{ active?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  margin: 0 0.2rem;
  height: 35px;
  width: 35px;
  border: 0;
  background: ${(props) => (props.active ? props.theme.colors.teal : props.theme.colors.white)};
  color: ${(props) => (props.active ? props.theme.colors.white : props.theme.colors.black)};
  &:hover {
    cursor: pointer;
  }
`;

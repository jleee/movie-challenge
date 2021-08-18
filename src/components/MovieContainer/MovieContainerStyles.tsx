import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, auto);

  @media (min-width: ${(props) => props.theme.mediaQueries.md}) {
    grid-template-columns: repeat(auto-fill, 250px);
  }
`;

export const Skeleton = styled.div`
  position: relative;
  background: #23242e;
  height: 455px;
  width: 200px;
  border-radius: 10px;
  overflow: hidden;
  &::after {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    animation: loading 0.8s infinite;
  }

  @keyframes loading {
    100% {
      transform: translateX(100%);
    }
  }

  @media (min-width: ${(props) => props.theme.mediaQueries.md}) {
    width: 250px;
  }
`;

export const SkeletonWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, auto);

  @media (min-width: ${(props) => props.theme.mediaQueries.md}) {
    grid-template-columns: repeat(auto-fill, 250px);
  }

  @media (min-width: ${(props) => props.theme.mediaQueries.xl}) {
    grid-template-columns: repeat(4, 250px);
  }
`;

import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background: ${(props) => props.theme.colors.grey.medium};
  color: ${(props) => props.theme.colors.white};
  transition: all ease 200ms;
  border-radius: 10px;
  &:hover {
    transform: scale(1.15);
    z-index: 1;
    box-shadow: 5px 3px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const MovieCardImage = styled.div`
  height: 400px;
  width: 100%;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MovieCardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 0.5rem;
  text-align: left;
  width: 100%;
  padding: 1rem;
`;

export const MovieCardTitle = styled.h2`
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.4rem;
`;

export const MovieCardRating = styled.div`
  text-align: left;
  font-size: 0.8rem;
  color: #fed945;
  z-index: 1;
  span {
    padding-right: 0.4rem;
  }
`;

export const MovieCardReleaseDate = styled.div`
  z-index: 1;
  font-size: 0.75rem;
  font-weight: 600;
  color: #fff;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-drection: row;
  justify-content: space-between;
  padding: 1rem;
  &:before {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    width: 100%;
    height: 100px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, #100916 110%);
  }
`;

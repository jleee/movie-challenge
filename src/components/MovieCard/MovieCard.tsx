import { FunctionComponent } from 'react';
import {
  MovieCardContainer,
  MovieCardImage,
  MovieCardDetails,
  MovieCardTitle,
  MovieCardRating,
  MovieCardReleaseDate,
  GradientOverlay,
} from './MovieCardStyles';

interface MovieCardProps {
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

const MovieCard: FunctionComponent<MovieCardProps> = ({ title, poster_path, vote_average, release_date }) => {
  return (
    <MovieCardContainer>
      <MovieCardImage>
        {poster_path === null ? (
          <img src="https://via.placeholder.com/500" alt="Placeholder" />
        ) : (
          <img src={`${process.env.REACT_APP_IMAGE_API_URL}${poster_path}`} alt={`Movie poster of ${title}`} />
        )}
        <GradientOverlay>
          <MovieCardRating>
            <span>★</span>
            {vote_average}
          </MovieCardRating>
          <MovieCardReleaseDate>{release_date?.substring(0, 4)}</MovieCardReleaseDate>
        </GradientOverlay>
      </MovieCardImage>
      <MovieCardDetails>
        <MovieCardTitle>{title}</MovieCardTitle>
      </MovieCardDetails>
    </MovieCardContainer>
  );
};

export default MovieCard;

import { FunctionComponent } from 'react';
import { Wrapper } from './MovieContainerStyles';
import Layout from '../../components/Layout/Layout';
import MovieCard from '../../components/MovieCard/MovieCard';
import { Movie } from '../../common/types';

interface MovieContainerProps {
  movies: Movie[];
}

const MovieContainer: FunctionComponent<MovieContainerProps> = ({ movies }) => {
  return (
    <Layout>
      {movies.length === 0 && (
        <h1>
          No movies found. <br /> Please try a different date search!
        </h1>
      )}
      <Wrapper>
        {movies.length > 0 &&
          movies.map((movie: Movie) => {
            const { id, title, poster_path, vote_average, release_date } = movie;
            return (
              <MovieCard
                key={id}
                title={title}
                poster_path={poster_path}
                vote_average={vote_average}
                release_date={release_date}
              />
            );
          })}
      </Wrapper>
    </Layout>
  );
};

export default MovieContainer;

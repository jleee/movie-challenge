import { Movie } from '../common/types';

export const sortMovieRatingsByDesc = (arr: Movie[]): Movie[] => {
  return arr.sort((a: Movie, b: Movie) => Number(b.vote_average) - Number(a.vote_average));
};

export const formatDate = (date: Date): string => {
  return date?.toISOString().substr(0, 10);
};

import { MovieResponse } from '../common/types';

export const getPopularMovies = async (): Promise<MovieResponse> => {
  const url = `${process.env.REACT_APP_DISCOVER_API_URL}?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc`;
  const response = await fetch(url);
  return await response.json();
};

export const getMovieSearch = async (
  startDate?: string,
  endDate?: string,
  pageNumber?: number,
): Promise<MovieResponse> => {
  const pageNumberParam = pageNumber ? `&page=${pageNumber}` : '';
  const startDateParam = startDate ? `&primary_release_date.gte=${startDate}` : '';
  const endDateParam = endDate ? `&primary_release_date.lte=${endDate}` : '';
  const url = `${process.env.REACT_APP_DISCOVER_API_URL}?api_key=${process.env.REACT_APP_API_KEY}${startDateParam}${endDateParam}${pageNumberParam}`;
  const response = await fetch(url);
  return await response.json();
};

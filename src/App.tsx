import { FunctionComponent, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import theme from './theme/theme';

import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import MovieContainer from './components/MovieContainer/MovieContainer';
import MovieContainerSkeleton from './components/MovieContainer/MovieContainerSkeleton';
import Pagination from './components/Pagination/Pagination';

import { Movie } from './common/types';
import { getPopularMovies, getMovieSearch } from './services/MovieService';
import { sortMovieRatingsByDesc, formatDate } from './utils';

const App: FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const getInitialData = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(sortMovieRatingsByDesc(data.results));
        setLoading(false);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
    setTimeout(() => getInitialData(), 1000);
  }, []);

  const handlePagination = async (pageNumber?: number) => {
    try {
      const data = await getMovieSearch(formatDate(startDate), formatDate(endDate), pageNumber);
      window.scrollTo(0, 0);
      setMovies(data.results);
      setCurrentPage(data.page);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (startDate === null && endDate === null) return;

    try {
      const data = await getMovieSearch(formatDate(startDate), formatDate(endDate));
      setMovies(data.results);
      setCurrentPage(data.page);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <SearchBar
        handleSearchSubmit={handleSearchSubmit}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        startDate={startDate}
        endDate={endDate}
      />
      {loading ? <MovieContainerSkeleton /> : <MovieContainer movies={movies} />}
      {totalPages > 1 && (
        <Pagination totalPages={totalPages} currentPage={currentPage} handlePagination={handlePagination} />
      )}
    </ThemeProvider>
  );
};

export default App;

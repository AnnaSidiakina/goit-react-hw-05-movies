import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from 'APIService/API';
import { Title } from './Home.styled';
import Paginate from 'components/Pagination/Pagination';

const TrendingMoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page') ?? 1);

  useEffect(() => {
    async function addMoviesList() {
      try {
        const data = await fetchTrendingMovies(page);

        if (page > 1) {
          setMovies(prev => [...prev, ...data.results]);
        }
        setMovies([...data.results]);
        setTotal(Math.round(data.total_results / 20));
        setSearchParams({ page: page });
      } catch (error) {
        setError(true);
      }
    }
    addMoviesList();
  }, [page]);

  const handlePageClick = e => {
    setSearchParams({ page: e.selected + 1 });
  };

  return (
    <>
      {movies && (
        <div>
          <Title>Trending today</Title>
          <MovieList movies={movies} />
          {total > 1 && (
            <Paginate total={total} handlePageClick={handlePageClick} />
          )}
        </div>
      )}
      {error && <p>Something went wrong, please, try again</p>}
    </>
  );
};
export default TrendingMoviesList;

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { Link, useLocation } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from 'APIService/API';
import { Title } from './Home.styled';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';
import Paginate from 'components/Pagination/Pagination';

const TrendingMoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page');
  // const location = useLocation();

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
  console.log(movies);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    console.log(page);
  };

  return (
    <>
      {movies && (
        <div>
          <Title>Trending today</Title>

          <MovieList movies={movies} />
          <Paginate total={total} onLoadMore={onLoadMore} />
          {/* <LoadMoreButton onLoadMore={onLoadMore} /> */}
        </div>
      )}
      {error && <p>Something went wrong, please, try again</p>}
    </>
  );
};
export default TrendingMoviesList;

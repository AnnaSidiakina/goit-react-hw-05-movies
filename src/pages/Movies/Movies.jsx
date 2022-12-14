import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toast';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchMoviesByQuery } from 'APIService/API';
import MovieList from 'components/MovieList/MovieList';
import Paginate from 'components/Pagination/Pagination';
import { topFunction } from 'Functions/Functions';

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(0);
  const page = Number(searchParams.get('page') ?? 1);

  useEffect(() => {
    if (query === '') {
      return;
    }
    // setMoviesList([]);

    async function addMoviesListByQuery() {
      try {
        const data = await fetchMoviesByQuery(query, page);
        if (page > 1) {
          setMoviesList(prevMoviesList => [...prevMoviesList, ...data.results]);
        }
        setMoviesList([...data.results]);
        setTotal(Math.round(data.total_results / 20));
        setSearchParams({ query: query, page: page });

        if (data.results.length === 0) {
          setError(true);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    addMoviesListByQuery();
  }, [query, page, setSearchParams]);

  const formSubmitHandler = e => {
    e.preventDefault();
    const searchForm = e.currentTarget.elements.query.value;
    if (searchForm === '') {
      toast.error('Please, enter your request');
    }

    setSearchParams(searchForm !== '' ? { query: searchForm, page: page } : '');
    setMoviesList([]);
  };

  const handlePageClick = e => {
    setSearchParams({ query: query, page: e.selected + 1 });
    topFunction();
  };

  return (
    <>
      <div>
        <Searchbar onSubmit={formSubmitHandler} value={query} />
        {moviesList && <MovieList movies={moviesList} />}
        {total > 1 && (
          <Paginate
            total={total}
            handlePageClick={handlePageClick}
            page={page}
          />
        )}

        {error && <p>Sorry, we can't find anyting for your request.</p>}
      </div>
    </>
  );
};
export default Movies;

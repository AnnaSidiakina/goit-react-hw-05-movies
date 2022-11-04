import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import TrendingMoviesList from 'pages/Home/Home';
// import { Movies } from '../pages/Movies/Movies';
import Layout from './Layout/Layout';
import { ToastContainer } from 'react-toast';
// import MovieDetails from '../pages/MovieDetails/MovieDetails';
// import CastPage from 'pages/Cast/CastPage';
// import ReviewsPage from 'pages/Reviews/ReviewsPage';

const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const PageNotFound = lazy(() =>
  import('../components/PageNotFound/PageNotFound')
);

export const App = () => {
  return (
    <div>
      <ToastContainer delay={3000} position={'top-left'} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TrendingMoviesList />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

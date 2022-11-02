import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TrendingMoviesList from 'pages/Home/Home';
// import { Movies } from '../pages/Movies/Movies';
import Layout from './Layout/Layout';
// import MovieDetails from '../pages/MovieDetails/MovieDetails';
// import CastPage from 'pages/Cast/CastPage';
// import ReviewsPage from 'pages/Reviews/ReviewsPage';

const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const CastPage = lazy(() => import('pages/Cast/CastPage'));
const ReviewsPage = lazy(() => import('pages/Reviews/ReviewsPage'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TrendingMoviesList />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<CastPage />} />
            <Route path="/movies/:movieId/reviews" element={<ReviewsPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

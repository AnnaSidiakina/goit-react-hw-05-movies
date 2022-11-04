import { getMovieByID } from '../../APIService/API';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import GoBackButton from 'components/GoBackButton/GoBackButton';
import {
  MovieWrapper,
  MovieInfoBlock,
  MovieTitle,
  MovieInfoTitle,
  AddInfo,
  AddInfoLink,
  AddInfoItem,
  MovieImg,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [error, setError] = useState(false);
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function addMovieInfo() {
      if (movieId) {
        try {
          const results = await getMovieByID(movieId);
          // console.log(results);
          setMovieInfo(results);
          return results;
        } catch (error) {
          setError(true);
        }
      }
    }
    addMovieInfo();
  }, [movieId]);
  console.log(location);

  return (
    <>
      {movieInfo && (
        <main>
          <GoBackButton />

          <MovieWrapper>
            <MovieImg
              src={
                movieInfo.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`
                  : 'https://cdn.pixabay.com/photo/2015/12/09/17/12/popcorn-1085072_960_720.jpg'
              }
              alt={movieInfo.title}
            />
            <MovieInfoBlock>
              <MovieTitle>
                {movieInfo.original_title} ({movieInfo.release_date.slice(0, 4)}
                )
              </MovieTitle>
              <p>
                User score: {Math.round((movieInfo.vote_average / 10) * 100)}%
              </p>
              <MovieInfoTitle>Overview</MovieInfoTitle>
              <p>{movieInfo.overview}</p>
              <MovieInfoTitle>Genres</MovieInfoTitle>
              <p>{movieInfo.genres.map(genre => genre.name).join(', ')}</p>
            </MovieInfoBlock>
          </MovieWrapper>
          <div>
            <MovieInfoTitle>Additional information</MovieInfoTitle>
            <AddInfo>
              <AddInfoItem>
                <AddInfoLink to="cast" state={location.state}>
                  Cast
                </AddInfoLink>
              </AddInfoItem>
              <AddInfoItem>
                <AddInfoLink to="reviews" state={location.state}>
                  Reviews
                </AddInfoLink>
              </AddInfoItem>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </AddInfo>
          </div>
        </main>
      )}
      {error && <p>Something went wrong, please, try again</p>}
    </>
  );
};
export default MovieDetails;

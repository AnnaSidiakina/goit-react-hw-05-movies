import { getMovieByID, baseConfig } from '../../APIService/API';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import Loader from 'components/Loader';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
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
          console.log(error.message);
        }
      }
    }
    addMovieInfo();
  }, [movieId]);

  return (
    <>
      {movieInfo && (
        <main>
          <Link to={location.state?.from ?? '/movies'}>Go back</Link>
          <div className={styles.MovieWrapper}>
            <img
              src={
                movieInfo.poster_path === null
                  ? baseConfig.altPosterUrl
                  : baseConfig.postersUrl +
                    baseConfig.postersSize +
                    movieInfo.poster_path
              }
              alt={movieInfo.title}
            />
            <div className={styles.MovieInfo}>
              <h1 className={styles.MovieTitle}>{movieInfo.original_title}</h1>
              <p>User score</p>
              <h2 className={styles.MovieInfoTitle}>Overview</h2>
              <p>{movieInfo.overview}</p>
              <h2 className={styles.MovieInfoTitle}>Genres</h2>
              <p>{movieInfo.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </div>
          <div>
            <h2 className={styles.MovieInfoTitle}>Additional information</h2>
            <ul className={styles.AddInfo}>
              <li className={styles.AddInfoItem}>
                <Link to="cast" className={styles.AddInfoLink}>
                  Cast
                </Link>
              </li>
              <li className={styles.AddInfoItem}>
                <Link to="reviews" className={styles.AddInfoLink}>
                  Reviews
                </Link>
              </li>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </ul>
          </div>
        </main>
      )}
    </>
  );
};
export default MovieDetails;

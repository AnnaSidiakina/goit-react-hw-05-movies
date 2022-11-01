import { getMovieByID, baseConfig } from '../../APIService/API';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import { GetGenres } from '../../components/GetGenres';

export const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    async function addMovieInfo() {
      try {
        const response = await getMovieByID(movieId);
        console.log(response);
        setMovieInfo(response);
        return response;
      } catch (error) {
        console.log(error.message);
      }
    }
    addMovieInfo();
  }, [movieId]);

  // const src =
  //   movieInfo.poster_path === null
  //     ? baseConfig.altPosterUrl
  //     : baseConfig.postersUrl + baseConfig.postersSize + movieInfo.poster_path;

  // console.log(movieInfo.genres);
  // let genres;
  // genres = movieInfo.genres.map(genre => genre.name).join(', ');
  // console.log(genres);

  return (
    <>
      {movieInfo && (
        <main>
          <div>
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
            <h1>{movieInfo.original_title}</h1>
            <p>User score</p>
            <h2>Overview</h2>
            <p>{movieInfo.overview}</p>
            <h2>Genres</h2>
            <p>{movieInfo.genres.map(genre => genre.name).join(', ')}</p>
          </div>
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </main>
      )}
    </>
  );
};

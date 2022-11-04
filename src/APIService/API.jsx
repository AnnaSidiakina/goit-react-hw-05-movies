import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '6a38aaae798b8ac86a83675596157586';
const PARAMS = {
  trending: 'trending/all/day',
  search: 'search/movie',
  movieID: 'movie/',
  reviews: '/reviews',
  credits: '/credits',
};

// export const baseConfig = {
//   base_url: 'https://api.themoviedb.org/3',
//   postersUrl: 'https://image.tmdb.org/t/p/',
//   postersSize: 'w185',
//   altPosterUrl:
//     'https://www.vaureal.fr/sites/vaureal/files/styles/_site_contenu_image_principale/public/image/2022-03/Solidarit%C3%A9%20ukraine.jpg?itok=Gcqq2tD3',
// };

// function get trenging movies for Home page, returns object
export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`/${PARAMS.trending}?api_key=${API_KEY}`);

  return data;
};

// function get movies by query for Movies page, returns object
export async function fetchMoviesByQuery(query) {
  const { data } = await axios.get(
    `/${PARAMS.search}?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );

  //   console.log(data);
  return data;
}

// function get movies by ID for Movie Details page, returns an object (info about movie)
export async function getMovieByID(id) {
  const { data } = await axios.get(
    `/${PARAMS.movieID}${id}?api_key=${API_KEY}&language=en-US`
  );

  return data;
}

// function get cast info about movie for Cast page
export async function getCastMovie(id) {
  const { data } = await axios.get(
    `/${PARAMS.movieID}${id}${PARAMS.credits}?api_key=${API_KEY}&language=en-US`
  );

  return data;
}

// function get reviews info about movie for Reviews page
export async function getReviewsMovie(id) {
  const { data } = await axios.get(
    `/${PARAMS.movieID}${id}${PARAMS.reviews}?api_key=${API_KEY}&language=en-US`
  );

  return data;
}

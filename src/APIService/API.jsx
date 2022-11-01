import axios from 'axios';

export const baseConfig = {
  api_key: '6a38aaae798b8ac86a83675596157586',
  base_url: 'https://api.themoviedb.org/3',
  postersUrl: 'https://image.tmdb.org/t/p/',
  postersSize: 'w185',
  altPosterUrl:
    'https://www.vaureal.fr/sites/vaureal/files/styles/_site_contenu_image_principale/public/image/2022-03/Solidarit%C3%A9%20ukraine.jpg?itok=Gcqq2tD3',
};

export const fetchTrendingMovies = async () => {
  const config = {
    baseURL: baseConfig.base_url,
    params: {
      api_key: baseConfig.api_key,
      language: 'en-US',
    },
  };

  const response = await axios
    .get('/trending/all/day', config)
    .then(response => response.data)
    .then(data => data.results);

  //   console.log(response);
  return response;
};

export async function fetchMoviesByQuery(query) {
  const config = {
    baseURL: baseConfig.base_url,
    params: {
      api_key: baseConfig.api_key,
      language: 'en-US',
      query: query,
    },
  };

  try {
    const response = await axios
      .get('/search/movie', config)
      .then(response => response.data)
      .then(data => data.results);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
export async function getMovieByID(id) {
  const config = {
    baseURL: baseConfig.base_url,
    params: {
      api_key: baseConfig.api_key,
      language: 'en-US',
    },
  };
  try {
    const response = await axios
      .get(`movie/${id}`, config)
      .then(response => response.data);

    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

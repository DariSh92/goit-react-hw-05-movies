import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '623136123c076ad8526bb20a79876cb7';

export const getMorePopularMovie = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${KEY}`
  );

  return response.data.results;
};

export const getMovieByQuery = async query => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return response.data.results;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${KEY}&language=eng`
  );
  console.log(response);
  return response.data;
};

export const getMovieByCredits = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  console.log(response);
  return response.data.cast;
};

export const getMovieByReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return response.data.results;
};

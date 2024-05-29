import axios from "axios";

const URL_SEARCH_MOVIES = "https://api.themoviedb.org/3/search/movie";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzg1ZTc4MDJhMmUyYTg0Yjc2Mjc4NGFiYjZjNDM3MiIsInN1YiI6IjY2NTRhZGUwNmFlZjhhMWY5NDVhNjI0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ilvnS2tcZ_941QhUfT0BEPTzRg1DecWQHbBVf8gz958",
  },
};

export default async function getTrendingMovies() {
  const response = await axios.get("/trending/movie/day", options);
  const dataTrendingMovies = response.data.results;
  return dataTrendingMovies;
}

async function getSearchMovies() {
  const response = await axios.get(URL_SEARCH_MOVIES, options);
  const dataSearchMovies = response.data;
  return dataSearchMovies;
}

async function getDetailsMovies(movieId) {
  const response = await axios.get(`/movie/${movieId}`, options);
  const dataDetailsMovies = response.data;
  return dataDetailsMovies;
}

async function getCreditsMovies(movieId) {
  const response = await axios.get(`/movie/${movieId}/credits`, options);
  const dataCreditsMovies = response.data.cast;
  return dataCreditsMovies;
}

async function getReviewsMovies(movieId) {
  const response = await axios.get(`/movie/${movieId}/reviews`, options);
  const dataReviewsMovies = response.data.results;

  return dataReviewsMovies;
}

export {
  getSearchMovies,
  getDetailsMovies,
  getCreditsMovies,
  getReviewsMovies,
};

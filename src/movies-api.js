import axios from "axios";

const URL_TRENDING_MOVIES = "https://api.themoviedb.org/3/trending/movie/day";

const URL_SEARCH_MOVIES = "https://api.themoviedb.org/3/search/movie";

const URL_DETAILS_MOVIES = "https://api.themoviedb.org/3/movie";

const URL_CREDITS_MOVIES = "https://api.themoviedb.org/3/movie/157336/credits";

const URL_REVIEWS_MOVIES = "https://api.themoviedb.org/3/movie/157336/reviews";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzg1ZTc4MDJhMmUyYTg0Yjc2Mjc4NGFiYjZjNDM3MiIsInN1YiI6IjY2NTRhZGUwNmFlZjhhMWY5NDVhNjI0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ilvnS2tcZ_941QhUfT0BEPTzRg1DecWQHbBVf8gz958",
  },
};

export default async function getTrendingMovies() {
  const response = await axios.get(URL_TRENDING_MOVIES, options);
  const dataTrendingMovies = response.data.results;
  return dataTrendingMovies;
}

async function getSearchMovies() {
  const response = await axios.get(URL_SEARCH_MOVIES, options);
  const dataSearchMovies = response.data;
  return dataSearchMovies;
}

async function getDetailsMovies(movieId) {
  const response = await axios.get(`${URL_DETAILS_MOVIES}/${movieId}`, options);
  const dataDetailsMovies = response.data;
  return dataDetailsMovies;
}

async function getCreditsMovies() {
  const response = await axios.get(URL_CREDITS_MOVIES, options);
  const dataCreditsMovies = response.data;
  return dataCreditsMovies;
}

async function getReviewsMovies() {
  const response = await axios.get(URL_REVIEWS_MOVIES, options);
  const dataReviewsMovies = response.data;
  return dataReviewsMovies;
}

export {
  getSearchMovies,
  getDetailsMovies,
  getCreditsMovies,
  getReviewsMovies,
};

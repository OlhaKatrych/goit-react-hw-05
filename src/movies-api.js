import axios from "axios";

const API_KEY = "2785e7802a2e2a84b762784abb6c4372";

const URL_TRENDING_MOVIES = "https://api.themoviedb.org/3/trending/movie/day";

const URL_SEARCH_MOVIES = "https://api.themoviedb.org/3/search/movie";

const URL_DETAILS_MOVIES = "https://api.themoviedb.org/3/movie/157336";

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
  console.log(dataSearchMovies);
  return dataSearchMovies;
}

async function getDetailsMovies() {
  const response = await axios.get(`${URL_DETAILS_MOVIES}?${API_KEY}&append_to_response=videos`, options);
  console.log(response);
}

getDetailsMovies();

export { getSearchMovies, getDetailsMovies };

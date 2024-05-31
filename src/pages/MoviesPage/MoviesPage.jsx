import css from "./MoviesPage.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";

import { useState, useEffect } from "react";

import { getSearchMovies } from "../../movies-api";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    async function getMovieBySearch(searchMovies) {
      try {
        setIsError(false);
        setIsLoader(true);
        const response = await getSearchMovies(searchMovies);
        setMovies(response.results);
      } catch {
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }
    getMovieBySearch(searchMovies);
  }, [searchMovies]);

  return (
    <div>
      {isError && <ErrorMessage />}
      {isLoader && <Loader />}
      <SearchBar setSearchMovies={setSearchMovies} />
      {movies.length > 0 && <MovieList datas={movies} />}
    </div>
  );
}

export default MoviesPage;

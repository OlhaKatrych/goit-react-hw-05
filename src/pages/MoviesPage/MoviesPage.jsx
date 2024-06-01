import css from "./MoviesPage.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { getSearchMovies } from "../../movies-api";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isError, setIsError] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  const query = searchParams.get("query");

  useEffect(() => {
    async function getMovieBySearch(query) {
      if (!query) return;
      try {
        setIsError(false);
        setIsLoader(true);
        const response = await getSearchMovies(query);
        setMovies(response.results);
      } catch {
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }
    getMovieBySearch(query);
  }, [searchParams]);

  async function handleSearch(query) {
    searchParams.set("query", query);
    setSearchParams(searchParams);
  }

  return (
    <div>
      {isError && <ErrorMessage />}
      {isLoader && <Loader />}
      <SearchBar onSearch={handleSearch} />
      {movies.length > 0 && <MovieList datas={movies} />}
    </div>
  );
}

export default MoviesPage;

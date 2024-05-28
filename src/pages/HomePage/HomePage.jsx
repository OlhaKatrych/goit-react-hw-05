import css from "./HomePage.module.css";

import getTrendingMovies from "../../movies-api";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";

import { useEffect, useState } from "react";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  useEffect(() => {
    async function getMovies() {
      try {
        setIsError(false);
        setIsLoader(true);
        const resp = await getTrendingMovies();
        setMovies(resp);
      } catch {
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }
    getMovies();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      {isError && <ErrorMessage />}
      {isLoader && <Loader />}
      {movies.length > 0 && <MovieList datas={movies}/>}
    </div>
  );
}

export default HomePage;

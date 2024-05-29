import css from "./MovieDetailsPage.module.css";

import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

import { getDetailsMovies } from "../../movies-api";

import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import MovieCast from "../../components/MovieCast/MovieCast";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null ?? movieId);
  const [isError, setIsError] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getMovieById(movieId) {
      try {
        setIsError(false);
        setIsLoader(true);
        const response = await getDetailsMovies(movieId);
        setMovie(response);
      } catch {
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }
    getMovieById(movieId);
  }, [movieId]);

  return (
    <div>
      {isLoader && <Loader />}
      {isError ? <ErrorMessage /> : <MovieInfo movie={movie} />}
      <hr className={css.line} />
      <p className={css.text}>Additional information</p>
      <ul className={css.list}>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
      </ul>
      <MovieCast movieId={movieId} />
    </div>
  );
}

export default MovieDetailsPage;

import css from "./MovieDetailsPage.module.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getDetailsMovies } from "../../movies-api";

import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null ?? movieId);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getMovieById(movieId) {
      try {
        setIsError(false);
        const response = await getDetailsMovies(movieId);
        setMovie(response);
      } catch {
        setIsError(true);
      } finally {
      }
    }
    getMovieById(movieId);
  }, [movieId]);

  return (
    <div>
      {isError ? (
        <ErrorMessage />
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.original_title}
          width="150"
          height="200"
        />
      )}
    </div>
  );
}

export default MovieDetailsPage;

import css from "./MovieCast.module.css";

import { getCreditsMovies } from "../../movies-api";

import { useState, useEffect } from "react";

function MovieCast({ movieId }) {
  console.log(movieId);

  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getMovieCast(movieId) {
      try {
        const response = await getCreditsMovies(movieId);
        setCast(response);
      } catch {
      } finally {
      }
    }
    getMovieCast(movieId);
  }, [movieId]);

  console.log(cast)
  return <div></div>;
}

export default MovieCast;

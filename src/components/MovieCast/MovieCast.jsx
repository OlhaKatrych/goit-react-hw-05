import css from "./MovieCast.module.css";

import { getCreditsMovies } from "../../movies-api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getMovieCast(movieId) {
      try {
        setIsError(false);
        setIsLoader(true);
        const response = await getCreditsMovies(movieId);
        setCast(response);
      } catch {
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }
    getMovieCast(movieId);
  }, [movieId]);

  return (
    <div>
      {isError && <ErrorMessage />}
      {isLoader && <Loader />}
      <ul className={css.list}>
        {cast.length > 0 &&
          cast.map((detailsCast) => {
            return (
              <li key={detailsCast.id}>
                {detailsCast.profile_path ? (
                  <img
                    className={css.picture}
                    src={`https://image.tmdb.org/t/p/w500/${detailsCast.profile_path}`}
                    alt={detailsCast.name}
                  />
                ) : (
                  defaultImg
                )}
                <p>{detailsCast.original_name}</p>
                <p>{detailsCast.character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default MovieCast;

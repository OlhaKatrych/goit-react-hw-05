import css from "./MovieDetailsPage.module.css";

import clsx from "clsx";
import { FaLongArrowAltLeft } from "react-icons/fa";

import { useState, useEffect, Suspense } from "react";
import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  Link,
} from "react-router-dom";

import { getDetailsMovies } from "../../movies-api";

import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import MovieInfo from "../../components/MovieInfo/MovieInfo";

function MovieDetailsPage() {
  function addActiveClass({ isActive }) {
    return clsx(css.link, isActive && css.active);
  }

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null ?? movieId);
  const [isError, setIsError] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  const location = useLocation();
  const backLinkHref = location.state ?? "/movies";

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
      <Link className={css.linkGoBack} to={backLinkHref} state={location}>
        {" "}
        <FaLongArrowAltLeft className={css.icon} />
        Go back
      </Link>
      {isError ? <ErrorMessage /> : <MovieInfo movie={movie} />}
      <hr className={css.line} />
      <p className={css.text}>Additional information</p>
      <ul className={css.list}>
        <li>
          <NavLink to="cast" className={addActiveClass}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={addActiveClass}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <hr className={css.line} />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default MovieDetailsPage;

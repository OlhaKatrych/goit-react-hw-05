import css from "./MovieList.module.css";

import { Link, useLocation } from "react-router-dom";

function MovieList({ datas }) {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {datas.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={location}>
              {title}{" "}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MovieList;

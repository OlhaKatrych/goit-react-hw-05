import css from "./MovieList.module.css";

import { Link } from "react-router-dom";

function MovieList({ datas }) {
  return (
    <ul className={css.list}>
      {datas.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MovieList;

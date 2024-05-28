import css from "./MovieList.module.css";

import { Link } from "react-router-dom";

function MovieList({ datas }) {
  console.log(datas);
  return (
    <ul className={css.list}>
      {datas.map((data) => {
        return (
          <li key={data.id}>
            <Link to="/movies">{data.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MovieList;

import css from "./MovieInfo.module.css";

function MovieInfo({ movie }) {
  const genresMovie = movie.genres;
  return (
    <div className={css.mainContainer}>
      <div>
        {" "}
        <img
          className={css.picture}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.original_title}
        />
      </div>
      <div className={css.container}>
        <h2>{movie.title}</h2>
        <p>
          <b>Date of Release: {movie.release_date}</b>
        </p>
        <p>Popularity: {movie.popularity}</p>
        <p>
          <b>Overview:</b> {movie.overview}
        </p>
        <p>
          <b>Genres:</b>
        </p>
        <ul className={css.list}>
          {genresMovie
            ? genresMovie.map((genre) => {
                return <li key={genre.id}>{genre.name}</li>;
              })
            : null}
        </ul>
      </div>
    </div>
  );
}

export default MovieInfo;

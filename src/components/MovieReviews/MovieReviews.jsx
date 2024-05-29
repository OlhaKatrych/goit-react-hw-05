import css from "./MovieReviews.module.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getReviewsMovies } from "../../movies-api";

import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";

function MovieReviews() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getReviews(movieId) {
      try {
        setIsError(false);
        setIsLoader(true);
        const response = await getReviewsMovies(movieId);
        setReviews(response);
      } catch {
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }
    getReviews(movieId);
  }, [movieId]);
  return (
    <div>
      {isError && <ErrorMessage />}
      {isLoader && <Loader />}
      {reviews.length > 0 ? (
        <ul className={css.list}>
          {reviews.map((review) => {
            return (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>
                  <b>Rating:</b> {review.author_details.rating}
                </p>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any review for this movie</p>
      )}
    </div>
  );
}

export default MovieReviews;

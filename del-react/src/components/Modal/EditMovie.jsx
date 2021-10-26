import React from "react";
import "./Modal.scss";
import ErrorBoundary from "../Tools/ErrorBoundary.jsx";
//import PropTypes from "prop-types";

const EditMovie = ({ currentMovie }) => {
  return (
    <ErrorBoundary>
      <form>
        <fieldset className="fieldset">
          <label htmlFor="movie-title">
            Title
            <input
              type="text"
              name="movie-title"
              id="movie-title"
              value={currentMovie?.title}
            />
          </label>
          <label htmlFor="movie-date">
            Release date
            <input
              type="date"
              name="movie-date"
              value={currentMovie?.release}
            />
          </label>
        </fieldset>
        <fieldset className="fieldset">
          <label htmlFor="movie-title">
            Movie url
            <input
              type="text"
              name="movie-url"
              id="movie-url"
              value={currentMovie?.url}
            />
          </label>
          <label htmlFor="movie-title">
            Rating
            <input
              type="text"
              name="movie-rating"
              value={currentMovie?.rating}
            />
          </label>
        </fieldset>
        <fieldset className="fieldset">
          <label htmlFor="movie-genre">
            Genre
            <input
              type="text"
              name="movie-genre"
              id="movie-genre"
              value={currentMovie?.genre}
            />
          </label>
          <label htmlFor="movie-runtime">
            Runtime
            <input
              type="time"
              name="movie-runtime"
              value={currentMovie?.runtime}
            />
          </label>
        </fieldset>
        <fieldset className="fieldset">
          <label htmlFor="movie-overview" className="full-set">
            Overview
            <textarea name="movie-overview" id="movie-overview">
              {currentMovie?.overview}
            </textarea>
          </label>
        </fieldset>
      </form>
    </ErrorBoundary>
  );
};

export default EditMovie;

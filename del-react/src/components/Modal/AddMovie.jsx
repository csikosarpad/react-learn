import React from "react";
import "./Modal.scss";
import ErrorBoundary from "../Tools/ErrorBoundary.jsx";
//import PropTypes from "prop-types";

class AddMovie extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <form>
          <fieldset className="fieldset">
            <label htmlFor="movie-title">
              Title
              <input type="text" name="movie-title" id="movie-title" />
            </label>
            <label htmlFor="movie-date">
              Release date
              <input type="date" name="movie-date" />
            </label>
          </fieldset>
          <fieldset className="fieldset">
            <label htmlFor="movie-title">
              Movie url
              <input type="text" name="movie-url" id="movie-url" />
            </label>
            <label htmlFor="movie-title">
              Rating
              <input
                type="number"
                name="movie-rating"
                id="movie-rating"
                placeholder="1.0"
                step="0.1"
                min="0"
                max="10"
              />
            </label>
          </fieldset>
          <fieldset className="fieldset">
            <label htmlFor="movie-genre">
              Genre
              <input type="text" name="movie-genre" id="movie-genre" />
            </label>
            <label htmlFor="movie-runtime">
              Runtime
              <input type="time" name="movie-runtime" />
            </label>
          </fieldset>
          <fieldset className="fieldset">
            <label htmlFor="movie-overview" className="full-set">
              Overview
              <textarea name="movie-overview" id="movie-overview"></textarea>
            </label>
          </fieldset>
        </form>
      </ErrorBoundary>
    );
  }
}

export default AddMovie;

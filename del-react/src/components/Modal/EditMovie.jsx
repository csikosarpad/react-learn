import React from "react";
import "./Modal.scss";
import ErrorBoundary from "../Tools/ErrorBoundary.jsx";
//import PropTypes from "prop-types";

class EditMovie extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <h3>Edit MOVIE</h3>
        <form>
          <fieldset>
            <label for="movie-title">Title</label>
            <input type="text" name="movie-title" id="movie-title" />
            <label for="movie-date">Release date</label>
            <input type="date" name="movie-date" />
          </fieldset>
          <fieldset>
            <label for="movie-title">Movie url</label>
            <input type="text" name="movie-url" id="movie-url" />
            <label for="movie-title">Rating</label>
            <input type="text" name="movie-rating" />
          </fieldset>
        </form>
      </ErrorBoundary>
    );
  }
}

export default EditMovie;

import React from "react";
import "./Modal.scss";
import ErrorBoundary from "../Tools/ErrorBoundary.jsx";
//import PropTypes from "prop-types";

class EditMovie extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <h4>ID:{this.props.id}</h4>
        {console.log(this.props)}
        <form>
          <fieldset>
            <label htmlFor="movie-title">Title</label>
            <input type="text" name="movie-title" id="movie-title" />
            <label htmlFor="movie-date">Release date</label>
            <input type="date" name="movie-date" />
          </fieldset>
          <fieldset>
            <label htmlFor="movie-title">Movie url</label>
            <input type="text" name="movie-url" id="movie-url" />
            <label htmlFor="movie-title">Rating</label>
            <input type="text" name="movie-rating" />
          </fieldset>
          <fieldset className="fieldset">
            <label for="movie-genre">
              Genre
              <input type="text" name="movie-genre" id="movie-genre" />
            </label>
            <label for="movie-runtime">
              Runtime
              <input type="text" name="movie-runtime" />
            </label>
          </fieldset>
        </form>
      </ErrorBoundary>
    );
  }
}

export default EditMovie;

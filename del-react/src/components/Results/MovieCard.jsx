import React, { useState } from "react";
import "./MovieCard.scss";

import PropTypes from "prop-types";
import ErrorBoundary from "../Tools/ErrorBoundary.jsx";

const MovieCard = (props) => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const toggleContextMenu = (e) => {
    setShowContextMenu((show) => !show);
  };

  return (
    <ErrorBoundary>
      <div className="movie-card">
        <div className="movie-card-container">
          <img
            src={process.env.PUBLIC_URL + "/posters/" + props.poster}
            alt={props.title}
          />
          <h3>{props.title}</h3>
          <p className="movie-card-title">{props.type}</p>
          <p className="movie-card-year">{props.year}</p>

          <span className="movie-card-contextmenu" onClick={toggleContextMenu}>
            <span
              className="movie-card-contextmenu-content"
              show={showContextMenu}
            >
              <span
                className="movie-card-button"
                onClick={() => props.actions.deleteMovie(props.movieId)}
              >
                Delete
              </span>
              <span
                className="movie-card-button"
                onClick={() => props.actions.editMovie(props.movieId)}
              >
                Edit
              </span>
              <span className="movie-card-contextmenu-close">x</span>
            </span>
          </span>
        </div>
      </div>
    </ErrorBoundary>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string,
};

MovieCard.defaultProps = {
  title: "Movie",
  type: "movie",
  year: 2000,
  poster: "",
};

export default MovieCard;

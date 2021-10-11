import React from "react";
import PropTypes from "prop-types";
import ErrorBoundary from "../Tools/ErrorBoundary.jsx";

class MovieCard extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="movie-card">
          <img
            src={process.env.PUBLIC_URL + "/posters/" + this.props.poster}
            alt={this.props.title}
          />
          <h3>{this.props.title}</h3>
          <p className="movie-card-title">{this.props.type}</p>
          <p className="movie-card-year">{this.props.year}</p>
          <span onClick={() => this.props.actions.deleteMovie(this.props.id)}>
            X
          </span>
        </div>
      </ErrorBoundary>
    );
  }
}

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

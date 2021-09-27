import React from "react";
import PropTypes from "prop-types";

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <h3>{this.props.title}</h3>
        <p className="movie-card-title">{this.props.type}</p>
        <p className="movie-card-year">{this.props.year}</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  year: PropTypes.string,
};

export default MovieCard;

import React from "react";
import PropTypes from "prop-types";

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img
          src={process.env.PUBLIC_URL + "/posters/" + this.props.poster}
          alt="{this.props.title}"
        />
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
  poster: PropTypes.string,
};

export default MovieCard;

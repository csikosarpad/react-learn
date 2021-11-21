import React from "react";
import "./MovieDetails.scss";
import ErrorBoundary from "../Tools/ErrorBoundary.jsx";

const MovieDetails = ({ moviesData, actions }) => {
  return (
    <>
      <header className="header">
        <ErrorBoundary>
          <img
            src={process.env.PUBLIC_URL + "/posters/" + moviesData?.poster}
            alt={moviesData?.title}
          />
          <h3>{moviesData?.title}</h3>
          <p className="movie-card-title">{moviesData?.genre}</p>
          <p className="movie-card-year">{moviesData?.release}</p>
          <p className="movie-card-runtime">{moviesData?.runtime}</p>
          <div className="movie-card-overview">{moviesData?.overview}</div>

          <span
            className="icon-search"
            onClick={() => actions.showSelectedMovie(false)}
          ></span>
        </ErrorBoundary>
      </header>
    </>
  );
};

export default MovieDetails;

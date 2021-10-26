import React from "react";
import PropTypes from "prop-types";
const MovieCard = React.lazy(() => import("./MovieCard.jsx"));

//import ErrorBoundary from "../Tools/ErrorBoundary.jsx";

const fallbackContent = () => (
  <>
    <div className="loading">
      <h2>Loading content</h2>
    </div>
  </>
);

const MoviesList = ({ moviesdata, actions }) => {
  return (
    <>
      <React.Suspense fallback={fallbackContent()}>
        {moviesdata.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            type={movie.type}
            year={movie.year}
            poster={movie.poster}
            actions={actions}
            movieId={movie.id}
          ></MovieCard>
        ))}
      </React.Suspense>
    </>
  );
};

MoviesList.propTypes = {
  moviesdata: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      poster: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;

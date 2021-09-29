import React from "react";
import moviesdata from "../../data/movies.json";
import MovieCard from "./MovieCard.jsx";

class MoviesList extends React.Component {
  render() {
    return (
      <>
        {moviesdata.map((movie) => (
          <MovieCard
            title={movie.title}
            type={movie.type}
            year={movie.year}
            img={movie.img}
          ></MovieCard>
        ))}
      </>
    );
  }
}

export default MoviesList;

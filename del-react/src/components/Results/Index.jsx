import React from "react";
import ResultsFilter from "./ResultsFilter.jsx";
import MoviesList from "./MoviesList.jsx";

//import PropTypes from "prop-types";

class Results extends React.Component {
  render() {
    return (
      <>
        <section className="results-container">
          <ResultsFilter />
          <section className="results">
            <MoviesList />
          </section>
        </section>
      </>
    );
  }
}

export default Results;

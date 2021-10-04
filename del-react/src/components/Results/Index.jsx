import React from "react";
import ResultsFilter from "./ResultsFilter.jsx";
import SortOrder from "./SortOrder.jsx";
import ResultNumbers from "./ResultNumbers.jsx";
import MoviesList from "./MoviesList.jsx";
//import ErrorBoundary from "../Tools/ErrorBoundary.jsx";

class Results extends React.Component {
  render() {
    return (
      <>
        <section className="results-container">
          <section className="filter-container">
            <ResultsFilter />
            <SortOrder />
          </section>
          <ResultNumbers />
          <section className="results">
            <MoviesList />
          </section>
        </section>
      </>
    );
  }
}

export default Results;

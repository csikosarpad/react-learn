import React from "react";
import ResultsFilter from "./ResultsFilter.jsx";
import SortOrder from "./SortOrder.jsx";
import ResultNumbers from "./ResultNumbers.jsx";
import MoviesList from "./MoviesList.jsx";
//import ErrorBoundary from "../Tools/ErrorBoundary.jsx";

const Results = ({ moviesdata, actions }) => {
  return (
    <>
      <section className="results-container">
        <section className="filter-container">
          <ResultsFilter />
          <SortOrder data={moviesdata} actions={actions} />
        </section>
        <ResultNumbers counter={moviesdata.length} />
        <section className="results">
          <MoviesList moviesdata={moviesdata} actions={actions} />
        </section>
      </section>
    </>
  );
};

export default Results;

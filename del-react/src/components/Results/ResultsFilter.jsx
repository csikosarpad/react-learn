import React from "react";

class ResultsFilter extends React.Component {
  render() {
    return (
      <>
        <nav className="filter">
          <ul>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#">All</a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#">Documentary</a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#">Comedy</a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#">Horror</a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default ResultsFilter;

import React from "react";
import Title from "./Title.jsx";
import SearchBox from "./SearchBox.jsx";
import Button from "../Elements/Button.jsx";
import ErrorBoundary from "../Tools/ErrorBoundary.jsx";

const Header = ({ actions }) => {
  return (
    <>
      <header className="header">
        <Title />
        <ErrorBoundary>
          <Button variant="primary" handleClick={actions.addMovie}>
            + ADD Movie
          </Button>
          <SearchBox />
        </ErrorBoundary>
      </header>
    </>
  );
};

export default Header;

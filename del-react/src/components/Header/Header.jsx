import React from "react";
import Title from "./Title.jsx";
import SearchBox from "./SearchBox.jsx";
import ErrorBoundary from "../Tools/ErrorBoundary.jsx";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <Title />
          <ErrorBoundary>
            {/*<Button variant="primary">Primary</Button>*/}
            <SearchBox />
          </ErrorBoundary>
        </header>
      </>
    );
  }
}

export default Header;

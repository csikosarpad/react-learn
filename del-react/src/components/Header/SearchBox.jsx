import React from "react";
import Button from "../Elements/Button.jsx";

class SearchBox extends React.Component {
  render() {
    return (
      <>
        <h2>Find your movie</h2>
        <form>
          <input type="text" name="title" className="searchbox" />
          <Button variant="primary">Search</Button>
        </form>
      </>
    );
  }
}

export default SearchBox;

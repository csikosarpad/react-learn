import React from "react";

export default class SortOrder extends React.Component {
  render() {
    return (
      <>
        <nav className="sortby">
          <ul>
            <li>
              Sort by:
              <select name="sort">
                <option value="releasedate">Release date</option>
              </select>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

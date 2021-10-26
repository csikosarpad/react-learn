import React from "react";

export default class SortOrder extends React.Component {
  render() {
    return (
      <>
        <nav className="sortby">
          <ul>
            <li>
              Sort by:
              <select
                name="sort"
                onChange={(select) =>
                  this.props.actions.sortItems(select.target.value)
                }
              >
                <option value="releasedate">Release date</option>
                <option value="movietitle">Movie title</option>
              </select>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

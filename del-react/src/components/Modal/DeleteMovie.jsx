import React from "react";
import "./Modal.scss";
import ErrorBoundary from "../Tools/ErrorBoundary.jsx";
//import PropTypes from "prop-types";

/*export default class DeleteMovie extends React.Component {
  onConfirm = (e) => {
    this.props.onConfirm && this.props.onConfirm(e);
  };
  render() {
    return (
      <>
        <h3>Delete MOVIE</h3>
        <p>Are you sure you want to delete this movie?</p>
        <button className="button confirm-button" onClick={this.onConfirm}>
          Confirm
        </button>
      </>
    );
  }
}
*/

const DeleteMovie = () => {
  return (
    <ErrorBoundary>
      <p>Are you sure you want to delete this movie?</p>
      <button
        className="button confirm-button"
        onClick={() => this.props.actions.confirmDelete()}
      >
        Confirm
      </button>
    </ErrorBoundary>
  );
};

export default DeleteMovie;

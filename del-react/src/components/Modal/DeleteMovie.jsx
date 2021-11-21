import React from "react";
import "./Modal.scss";
import ErrorBoundary from "../Tools/ErrorBoundary.jsx";
//import PropTypes from "prop-types";

const DeleteMovie = (props) => {
  return (
    <ErrorBoundary>
      <p>Are you sure you want to delete this movie?</p>
      <button
        className="button confirm-button"
        onClick={() => props.actions.confirmDelete()}
      >
        Confirm
      </button>
    </ErrorBoundary>
  );
};

export default DeleteMovie;

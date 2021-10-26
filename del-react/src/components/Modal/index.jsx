import React from "react";
import "./Modal.scss";
import PropTypes from "prop-types";

import AddMovie from "./AddMovie";
import DeleteMovie from "./DeleteMovie";
import EditMovie from "./EditMovie";

export default class Modal extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    const subModals = { delete: DeleteMovie, add: AddMovie, edit: EditMovie };
    const ChoosenModal = subModals[this.props.action];

    return (
      <>
        <div className="modal-overlay" />
        <div className="modal" id="modal">
          <h2>{this.props.title}</h2>
          <div className="content">
            <ChoosenModal {...this.props} />
          </div>
          <button className="toggle-button" onClick={this.onClose}>
            x
          </button>
          <div className="actions"></div>
        </div>
      </>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

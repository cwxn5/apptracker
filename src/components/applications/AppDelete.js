import React from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { deleteApplication } from "../../actions/applications";

class AppDelete extends React.Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  renderAppSummary() {
    const application = this.props.application;
    return (
      <div>
        <p>
          {application.position} at {application.company}
        </p>
      </div>
    );
  }
  onDelete = () => {
    this.props.deleteApplication(this.props.id);
    this.handleClose();
  };
  renderActions() {
    return (
      <React.Fragment>
        <button onClick={this.handleClose} className="ui button">
          Cancel
        </button>
        <button onClick={this.onDelete} className="ui button negative">
          Delete
        </button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleOpen} variant="danger">
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
        <Modal show={this.state.modalOpen} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Delete this application?</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.renderAppSummary()}</Modal.Body>
          <Modal.Footer>{this.renderActions()}</Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default connect(null, { deleteApplication })(AppDelete);

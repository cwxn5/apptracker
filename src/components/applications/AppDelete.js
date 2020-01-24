import React from "react";
import { connect } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { deleteApplication } from "../../actions/applications";

class AppDelete extends React.Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });
  renderButton() {
    return (
      <Button onClick={this.handleOpen} fluid color="red">
        <FontAwesomeIcon icon={faTrashAlt} />
      </Button>
    );
  }
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
      <Modal
        trigger={this.renderButton()}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Delete this application?</Modal.Header>
        <Modal.Content>{this.renderAppSummary()}</Modal.Content>
        <Modal.Actions>{this.renderActions()}</Modal.Actions>
      </Modal>
    );
  }
}

export default connect(null, { deleteApplication })(AppDelete);

import React from "react";
import { connect } from "react-redux";
import { deleteApplication } from "../../actions/applications";
import { Button, Icon, Modal } from "semantic-ui-react";

class AppDelete extends React.Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });
  renderButton() {
    return (
      <Button onClick={this.handleOpen} fluid color="red">
        <Icon name="trash alternate outline" />
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

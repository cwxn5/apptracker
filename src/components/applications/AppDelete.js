import React from "react";
import { connect } from "react-redux";
import { Button, Modal } from "antd";
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
        <Button onClick={this.handleClose}>Cancel</Button>
        <Button type="danger" onClick={this.onDelete}>
          Delete
        </Button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleOpen}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
        <Modal
          visible={this.state.modalOpen}
          title="Delete this application?"
          onOk={this.handleOk}
          onCancel={this.handleClose}
          footer={this.renderActions()}
        >
          {this.renderAppSummary()}
        </Modal>
      </React.Fragment>
    );
  }
}

export default connect(null, { deleteApplication })(AppDelete);

import React from "react";
import { connect } from "react-redux";
import { Button, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { editApplication } from "../../actions/applications";
import AppForm from "./AppForm";

class AppEdit extends React.Component {
  state = { modalOpen: false };
  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });
  renderButton() {
    return (
      <Button onClick={this.handleOpen}>
        <FontAwesomeIcon icon={faEdit} />
      </Button>
    );
  }
  onSubmit = formValues => {
    this.props.editApplication(formValues, this.props.id);
    this.handleClose();
  };

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleOpen}>
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Modal
          visible={this.state.modalOpen}
          title="Edit Application"
          onOk={this.handleClose}
          onCancel={this.handleClose}
          destroyOnClose={true}
          footer={null}
        >
          <AppForm
            initialValues={this.props.application}
            onSubmit={this.onSubmit}
          />
        </Modal>
      </React.Fragment>
    );
  }
}

export default connect(null, { editApplication })(AppEdit);

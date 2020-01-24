import React from "react";
import { connect } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { createApplication } from "../../actions/applications";
import AppForm from "./AppForm";

class AppCreate extends React.Component {
  state = { modalOpen: false };
  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });
  renderButton() {
    return (
      <Button onClick={this.handleOpen} fluid color="black">
        <FontAwesomeIcon icon={faPlus} /> Add An Application
      </Button>
    );
  }
  onSubmit = formValues => {
    this.props.createApplication({
      ...formValues,
      status: `${this.props.status}`
    });
    this.handleClose();
  };

  render() {
    return (
      <Modal
        trigger={this.renderButton()}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Content>
          <div>
            <h1>New Application</h1>
            <AppForm onSubmit={this.onSubmit} />
          </div>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect(null, { createApplication })(AppCreate);

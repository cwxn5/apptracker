import React from "react";
import { connect } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
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
      <Button onClick={this.handleOpen} fluid color="green">
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
      <Modal
        trigger={this.renderButton()}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Content>
          <div>
            <h3>Edit Application</h3>
            <AppForm
              initialValues={this.props.application}
              onSubmit={this.onSubmit}
            />
          </div>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect(null, { editApplication })(AppEdit);

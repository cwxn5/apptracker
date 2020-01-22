import React from "react";
import { connect } from "react-redux";
import { editApplication } from "../../actions/applications";
import AppForm from "./AppForm";
import { Button, Icon, Modal } from "semantic-ui-react";

class AppEdit extends React.Component {
  state = { modalOpen: false };
  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });
  renderButton() {
    return (
      <Button onClick={this.handleOpen} fluid color="green">
        <Icon name="edit outline" />
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

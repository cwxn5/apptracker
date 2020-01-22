import React from "react";
import { connect } from "react-redux";
import { createApplication } from "../../actions/applications";
import AppForm from "./AppForm";
import { Button, Icon, Modal } from "semantic-ui-react";

class AppCreate extends React.Component {
  state = { modalOpen: false };
  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });
  renderButton() {
    return (
      <Button onClick={this.handleOpen} fluid color="black">
        <Icon name="plus" />
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
            <h3>New Application</h3>
            <AppForm onSubmit={this.onSubmit} />
          </div>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect(null, { createApplication })(AppCreate);

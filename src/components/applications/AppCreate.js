import React from "react";
import { connect } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { createApplication } from "../../actions/applications";
import AppForm from "./AppForm";

class AppCreate extends React.Component {
  state = { modalOpen: false };
  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });
  renderButton() {
    return (
      <Button onClick={this.handleOpen} fluid color="black">
        <FontAwesomeIcon icon={faPlusSquare} />
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

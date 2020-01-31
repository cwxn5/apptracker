import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import { editApplication } from "../../../actions/applications";
import AppForm from "./AppForm";
import {
  ModalWrapper,
  TitleDiv,
  IconButton
} from "../../../styles/ModalWrapper";

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
  renderTitle = () => {
    return (
      <TitleDiv>
        <div>Edit Application</div>
        <div>
          <IconButton onClick={this.handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </IconButton>
        </div>
      </TitleDiv>
    );
  };
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
        <ModalWrapper
          visible={this.state.modalOpen}
          closable={false}
          title={this.renderTitle()}
          onOk={this.handleClose}
          onCancel={this.handleClose}
          destroyOnClose={true}
          footer={null}
        >
          <AppForm
            initialValues={this.props.application}
            onSubmit={this.onSubmit}
          />
        </ModalWrapper>
      </React.Fragment>
    );
  }
}

export default connect(null, { editApplication })(AppEdit);

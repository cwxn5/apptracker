import React from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { createApplication } from "../../actions/applications";
import AppForm from "./AppForm";

class AppCreate extends React.Component {
  state = { modalOpen: false };
  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  onSubmit = formValues => {
    this.props.createApplication({
      ...formValues,
      status: `${this.props.status}`
    });
    this.handleClose();
  };

  render() {
    return (
      <React.Fragment>
        <Button block variant="dark " onClick={this.handleOpen}>
          <FontAwesomeIcon icon={faPlus} /> Add An Application
        </Button>
        <Modal show={this.state.modalOpen} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>New Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AppForm onSubmit={this.onSubmit} />
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}

export default connect(null, { createApplication })(AppCreate);

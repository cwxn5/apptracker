import React from "react";
import { connect } from "react-redux";
import { Button, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { createApplication } from "../../actions/applications";
import AppForm from "./AppForm";

const CreateButton = styled.button`
  color: white;
  background-color: #1b1c1d;
  width: 100%;
  height: 40px;
  font-size: 16px;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;

class AppCreate extends React.Component {
  state = { visible: false };

  showModal = () => this.setState({ visible: true });

  hideModal = () => this.setState({ visible: false });

  onSubmit = formValues => {
    this.props.createApplication({
      ...formValues,
      status: `${this.props.status}`
    });
    this.hideModal();
  };

  render() {
    return (
      <React.Fragment>
        <CreateButton block onClick={this.showModal}>
          <FontAwesomeIcon icon={faPlus} /> Add An Application
        </CreateButton>
        <Modal
          visible={this.state.visible}
          title="New Application"
          onOk={this.handleOk}
          onCancel={this.hideModal}
          destroyOnClose={true}
          footer={null}
        >
          <AppForm onSubmit={this.onSubmit} />
        </Modal>
      </React.Fragment>
    );
  }
}

export default connect(null, { createApplication })(AppCreate);

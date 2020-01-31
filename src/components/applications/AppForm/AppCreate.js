import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { createApplication } from "../../../actions/applications";
import AppForm from "./AppForm";
import { ModalWrapper } from "../../../styles/ModalWrapper";
import { themes } from "../../../styles/theme";

const CreateButton = styled.button`
  color: ${themes.default.color1};
  background-color: ${themes.default.color5};
  width: 100%;
  height: 40px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${themes.default.color1};
`;
const IconButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

class AppCreate extends React.Component {
  state = { visible: false };

  showModal = () => this.setState({ visible: true });

  hideModal = () => this.setState({ visible: false });

  renderTitle = () => {
    return (
      <TitleDiv>
        <div>New Application</div>
        <div>
          <IconButton onClick={this.hideModal}>
            <FontAwesomeIcon icon={faTimes} />
          </IconButton>
        </div>
      </TitleDiv>
    );
  };

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
        <ModalWrapper
          visible={this.state.visible}
          title={this.renderTitle()}
          onOk={this.handleOk}
          onCancel={this.hideModal}
          destroyOnClose={true}
          footer={null}
          closable={false}
        >
          <AppForm onSubmit={this.onSubmit} />
        </ModalWrapper>
      </React.Fragment>
    );
  }
}

export default connect(null, { createApplication })(AppCreate);

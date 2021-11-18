import React from "react";
import { connect } from "react-redux";
import { Drawer } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { device } from "../styles/device";
import { themes } from "../styles/theme";

import Logout from './Logout';
import CreateApplicationGroup from "./applicationGroups/createApplicationGroup";

const IconWrapper = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: ${themes.default.color2};
  @media ${device.mobileS} {
    font-size: 26px;
    padding-left: 4px;
  }
  @media ${device.tablet} {
    font-size: 40px;
    padding: 4px 8px;
  }
`;

class SettingsDrawer extends React.Component {
  state = { visible: false };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      visible: false
    });
    this.props.startLogout();
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <div>
        <IconWrapper
          icon={faCog}
          size="2x"
          inverse
          onClick={this.showDrawer}
        >
          Settings
        </IconWrapper>
        <Drawer
          title="AppTracker Settings"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          width="300"
        >
          Test
          Current Search Name
          CRUD Search
          <CreateApplicationGroup />
          <Logout />
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    apps: state.applications.applications,
  };
};

export default connect(mapStateToProps)(SettingsDrawer);

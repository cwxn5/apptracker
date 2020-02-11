import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "antd";

import Search from "./Search";
import StatsDrawer from "./StatsDrawer";
import Links from "./settings/Links";

import { startLogout } from "../actions/auth";

import * as Style from "../styles/Navbar";

class Header extends React.Component {
  state = { visible: false };

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

  render() {
    return (
      <Style.Navbar>
        <Style.NavbarLeft>
          <Style.NavbarTitle>AppTracker</Style.NavbarTitle>
          <Style.SearchDiv>
            <Search />
          </Style.SearchDiv>
        </Style.NavbarLeft>
        <Style.NavbarRight>
          <StatsDrawer />
          <Style.LinksWrapper>
            <Links />
          </Style.LinksWrapper>
          <Style.LogOutButton onClick={this.showModal}>
            <FontAwesomeIcon style={{ paddingRight: "4px" }} icon={faGoogle} />
            <FontAwesomeIcon icon={faSignOutAlt} />
          </Style.LogOutButton>
          <Modal
            title="Confirm Sign Out"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={
              <Style.LogOutButton onClick={this.handleOk}>
                Sign Out
              </Style.LogOutButton>
            }
          >
            <p>Are you sure?</p>
          </Modal>
        </Style.NavbarRight>
      </Style.Navbar>
    );
  }
}

const mapStateToProps = (state = {}) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps, { startLogout })(Header);

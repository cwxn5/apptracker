import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import Search from "./Search";
import StatsDrawer from "./StatsDrawer";

import { startLogout } from "../actions/auth";

import * as Style from "../styles/Navbar";

class Header extends React.Component {
  onLogoutClick = () => {
    this.props.startLogout();
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
          <Style.NavbarName>{this.props.user.displayName}</Style.NavbarName>
          <Style.LogOutButton onClick={this.onLogoutClick}>
            <FontAwesomeIcon icon={faGoogle} /> Logout
          </Style.LogOutButton>
        </Style.NavbarRight>
      </Style.Navbar>
    );
  }
}

const mapStateToProps = (state = {}) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps, { startLogout })(Header);

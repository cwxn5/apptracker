import React from "react";
import { connect } from "react-redux";

import Search from "./Search";
import StatsDrawer from "./StatsDrawer";
import SettingsDrawer from "./SettingsDrawer";
import Links from "./settings/Links";

import { startLogout } from "../actions/auth";

import * as Style from "../styles/Navbar";

class Header extends React.Component {
  state = { visible: false };

  

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
          <SettingsDrawer />
        </Style.NavbarRight>
      </Style.Navbar>
    );
  }
}

const mapStateToProps = (state = {}) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps, { startLogout })(Header);

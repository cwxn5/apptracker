import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import { Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxes } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { startLogout } from "../actions/auth";
import { setTextFilter } from "../actions/filters";

const LogOutButton = styled.button`
  margin-left: 12px;
  background-color: #d34836;
  border: none;
  color: white;
  border-radius: 16px;
  padding: 8px 12px;
`;
const DarkNavbar = styled(Navbar)`
  background-color: #1b1c1d;
`;

class Header extends React.Component {
  onLogoutClick = () => {
    this.props.startLogout();
  };
  onChange = e => {
    this.props.setTextFilter(e.target.value);
  };
  render() {
    return (
      <DarkNavbar variant="dark">
        <Navbar.Brand>
          <FontAwesomeIcon
            icon={faBoxes}
            size="lg"
            className="d-inline-block align-top"
          />{" "}
          AppTracker
        </Navbar.Brand>
        <Input
          placeholder="Search by Company"
          onChange={this.onChange}
          allowClear
          style={{ width: 200 }}
        ></Input>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>{this.props.user.displayName}</Navbar.Text>
          <LogOutButton onClick={this.onLogoutClick}>
            <FontAwesomeIcon icon={faGoogle} /> Logout
          </LogOutButton>
        </Navbar.Collapse>
      </DarkNavbar>
    );
  }
}

const mapStateToProps = (state = {}) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps, { startLogout, setTextFilter })(Header);

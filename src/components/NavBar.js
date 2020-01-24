import React from "react";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxes } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

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
  componentDidMount() {}

  onLogoutClick = () => {
    this.props.startLogout();
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

export default connect(mapStateToProps, { startLogout })(Header);

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

class Header extends React.Component {
  componentDidMount() {}

  onLogoutClick = () => {
    this.props.startLogout();
  };
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <FontAwesomeIcon
            icon={faBoxes}
            size="lg"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Text>AppTracker</Navbar.Text>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>{this.props.user.displayName}</Navbar.Text>
          <LogOutButton onClick={this.onLogoutClick}>
            <FontAwesomeIcon icon={faGoogle} /> Logout
          </LogOutButton>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state = {}) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps, { startLogout })(Header);

import React from "react";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import styled from "styled-components";

const WhiteH3 = styled.h3`
  color: rgba(255, 255, 255, 0.9);
`;

class NavBar extends React.Component {
  componentDidMount() {}

  onLogoutClick = () => {
    this.props.startLogout();
  };
  render() {
    return (
      <div className="ui attached inverted menu">
        <div className="item">
          <i className="big boxes icon" /> <WhiteH3>AppTracker</WhiteH3>
        </div>
        <div className="right menu">
          <div className="item">{this.props.user.displayName}</div>
          <div className="item">
            <button
              className="ui circular google plus icon button"
              onClick={this.onLogoutClick}
            >
              <i className="google plus icon"></i> Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state = {}) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps, { startLogout })(NavBar);

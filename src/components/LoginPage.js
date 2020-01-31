import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import background from "../images/background.jpg";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Body = styled.div`
  height: 100vh;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const CenteredDiv = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  padding-left: 20%;
`;
const LogInButton = styled.button`
  background-color: #d34836;
  border: none;
  color: white;
  border-radius: 16px;
  padding: 8px 12px;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;

const P = styled.p`
  width: 60%;
`;

export const LoginPage = () => (
  <Body>
    <CenteredDiv>
      <div className="ui centered middle aligned grid">
        <div className="column">
          <h1 className="ui header">AppTracker</h1>
          <P>Here to help organize the job hunt.</P>
          <LogInButton onClick={startLogin}>
            <FontAwesomeIcon icon={faGoogle} /> Login with Google
          </LogInButton>
        </div>
      </div>
    </CenteredDiv>
  </Body>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

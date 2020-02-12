import React from "react";
import { connect } from "react-redux";
import { Popover, message } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperclip, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import LinksForm from "./LinksForm";
import { createSettings } from "../../actions/userSettings";
import { themes } from "../../styles/theme";

const IconWrapper = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 30px;
  margin: 4px 8px;
`;
const PaperClipWrapper = styled(IconWrapper)`
  color: ${themes.default.color2};
  font-size: 20px;
`;
const LinkedInWrapper = styled(IconWrapper)`
  color: ${themes.default.color3};
`;
const GithubWrapper = styled(IconWrapper)`
  color: ${themes.default.color5};
`;
const PortfolioWrapper = styled(IconWrapper)`
  color: ${themes.default.color5};
`;
const FormButton = styled.button`
  color: ${themes.default.color1};
  background-color: ${themes.default.color5};
  width: 100%;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

class Links extends React.Component {
  state = {
    visible: false
  };

  hide = () => {
    this.setState({
      visible: false
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };
  onSubmit = formValues => {
    this.props.createSettings(formValues);
  };
  copyToClipboard = text => {
    navigator.clipboard.writeText(text).then(function() {
      message.success(`Copied: ${text}`, 2);
    });
  };
  renderIcons = () => {
    if (this.props.userSettings) {
      return (
        <div>
          {this.props.userSettings.linkedin && (
            <LinkedInWrapper
              onClick={() =>
                this.copyToClipboard(this.props.userSettings.linkedin)
              }
              title="LinkedIn"
              icon={faLinkedin}
            />
          )}
          {this.props.userSettings.github && (
            <GithubWrapper
              onClick={() =>
                this.copyToClipboard(this.props.userSettings.github)
              }
              title="Github"
              icon={faGithub}
            />
          )}
          {this.props.userSettings.portfolio && (
            <PortfolioWrapper
              onClick={() =>
                this.copyToClipboard(this.props.userSettings.portfolio)
              }
              title="Portfolio"
              icon={faUserCircle}
            />
          )}
          {this.renderForm()}
        </div>
      );
    }
  };
  renderForm = () => {
    return (
      <Popover
        content={
          <LinksForm
            initialValues={this.props.userSettings}
            onSubmit={this.onSubmit}
          />
        }
        title="Edit Common Links"
      >
        <FormButton>Edit Links</FormButton>
      </Popover>
    );
  };
  renderLinks = () => {
    return (
      <Popover
        placement="bottomRight"
        content={this.renderIcons()}
        title="Copy Links to Clipboard"
        arrowPointAtCenter
      >
        <PaperClipWrapper icon={faPaperclip} />
      </Popover>
    );
  };
  render() {
    return this.renderLinks();
  }
}
const mapStateToProps = (state = {}) => {
  return { user: state.auth.user, userSettings: state.userSettings };
};
export default connect(mapStateToProps, { createSettings })(Links);

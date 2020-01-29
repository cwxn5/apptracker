import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Switch, Badge } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import AppCard from "./AppCard";
import AppCreate from "./AppCreate";
import getFilteredApplications from "../../selectors/application";

const ColumnCountBadge = styled.div`
  border-radius: 50%;
  width: 27px;
  height: 27px;
  padding: 3px;
  margin-left: 8px;
  font-weight: bold;
  background: black;
  color: white;
  text-align: center;
`;
const ColumnDiv = styled.div`
  min-width: 350px;
  width: 350px;
  height: fit-content;
  margin: 16px;
  padding: 8px;
  background-color: #f3f4f5;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`;
const ColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${props => (props.cards ? "8px" : "0")};
`;
const ColumnHeaderTitle = styled.div`
  display: flex;
  align-items: center;
`;
const RightAlignItem = styled.div`
  float: right;
  text-align: right;
`;
const AppCardsDiv = styled.div`
  border: ${props => (props.showCardAppsBorder ? "1px solid #d9d9d9" : "none")};
  border-radius: 4px;
  overflow-y: auto;
  max-height: 75vh;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: black;
  padding-left: 8px;
`;

class AppColumn extends React.Component {
  state = { showCards: false };
  renderAppCards = () => {
    if (this.props.title !== "Rejected" || this.state.showCards) {
      return this.props.apps.map(app => {
        return <AppCard key={app} id={app} />;
      });
    }
  };
  renderAppCreate = () => {
    if (this.props.title === "Applied") {
      return <AppCreate status={this.props.title} />;
    }
  };
  handleShowRejectedAppsChange = () => {
    this.setState({ showCards: !this.state.showCards });
  };
  renderShowRejectedApps = () => {
    if (this.props.title === "Rejected") {
      return (
        <RightAlignItem>
          <Switch
            onClick={this.handleShowRejectedAppsChange}
            checked={this.state.showCards}
            checkedChildren={<FontAwesomeIcon icon={faEye} />}
            unCheckedChildren={<FontAwesomeIcon icon={faEyeSlash} />}
          />
        </RightAlignItem>
      );
    }
  };
  render() {
    //list of all AppCards that match status of AppColumn
    return (
      <ColumnDiv>
        <ColumnHeader
          cards={
            (this.props.title !== "Rejected" || this.state.showCards) &&
            this.props.apps.length > 0
          }
        >
          <ColumnHeaderTitle>
            <Title>{this.props.title}</Title>
            <ColumnCountBadge>{this.props.apps.length}</ColumnCountBadge>
          </ColumnHeaderTitle>
          {this.renderShowRejectedApps()}
        </ColumnHeader>
        <AppCardsDiv
          showCardAppsBorder={
            (this.props.title !== "Rejected" || this.state.showCards) &&
            this.props.apps.length > 0
          }
        >
          {this.renderAppCards()}
        </AppCardsDiv>
        {this.renderAppCreate()}
      </ColumnDiv>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const applications = getFilteredApplications(
    state.applications,
    state.filters,
    ownProps.title
  );
  return {
    apps: Object.keys(applications)
  };
};

export default connect(mapStateToProps)(AppColumn);

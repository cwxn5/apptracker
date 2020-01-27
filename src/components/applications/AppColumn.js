import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { Header, Label } from "semantic-ui-react";
import { Switch } from "antd";

import AppCard from "./AppCard";
import AppCreate from "./AppCreate";
import getFilteredApplications from "../../selectors/application";

const ColumnDiv = styled.div`
  min-width: 350px;
  width: 350px;
  padding: 16px;
`;

const AppCardsDiv = styled.div`
  overflow-y: auto;
  max-height: 80%;
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
        <div style={{ float: "right", textAlign: "right" }}>
          <Switch
            onClick={this.handleShowRejectedAppsChange}
            checked={this.state.showCards}
            size="small"
          />
        </div>
      );
    }
  };
  render() {
    //list of all AppCards that match status of AppColumn
    return (
      <ColumnDiv>
        <div className="columnHeader">
          <Header as="h3" block textAlign="left">
            {this.props.title}
            <Label circular color="black">
              {this.props.apps.length}
            </Label>
            {this.renderShowRejectedApps()}
          </Header>
        </div>
        <AppCardsDiv>{this.renderAppCards()}</AppCardsDiv>
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

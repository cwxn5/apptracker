import React from "react";
import { connect } from "react-redux";
import { Switch } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import AppCard from "./AppCard";
import AppCreate from "./AppCreate";
import getFilteredApplications from "../../selectors/application";
import * as Style from "../../styles/AppCard";

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
    if (this.props.title === "Rejected" && this.props.apps.length) {
      return (
        <Style.RightAlignItem>
          <Switch
            onClick={this.handleShowRejectedAppsChange}
            checked={this.state.showCards}
            checkedChildren={<FontAwesomeIcon icon={faEye} />}
            unCheckedChildren={<FontAwesomeIcon icon={faEyeSlash} />}
          />
        </Style.RightAlignItem>
      );
    }
  };
  render() {
    //list of all AppCards that match status of AppColumn
    //<ColumnCountBadge>{this.props.apps.length}</ColumnCountBadge>
    return (
      <Style.ColumnDiv>
        <Style.ColumnHeader
          cards={
            (this.props.title !== "Rejected" || this.state.showCards) &&
            this.props.apps.length > 0
          }
        >
          <Style.ColumnHeaderTitle>
            <Style.Title>{this.props.title}</Style.Title>
            <Style.AvatarWrapper>{this.props.apps.length}</Style.AvatarWrapper>
          </Style.ColumnHeaderTitle>
          {this.renderShowRejectedApps()}
        </Style.ColumnHeader>
        <Style.AppCardsDiv
          showCardAppsBorder={
            (this.props.title !== "Rejected" || this.state.showCards) &&
            this.props.apps.length > 0
          }
        >
          {this.renderAppCards()}
        </Style.AppCardsDiv>
        {this.renderAppCreate()}
      </Style.ColumnDiv>
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

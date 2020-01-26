import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import styled from "styled-components";
import AppCard from "./AppCard";
import AppCreate from "./AppCreate";
import { Header, Label } from "semantic-ui-react";

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
  renderAppCards = () => {
    return this.props.apps.map(app => {
      return <AppCard key={app} id={app} />;
    });
  };
  renderAppCreate = title => {
    if (title === "Applied") {
      return <AppCreate status={title} />;
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
          </Header>
        </div>
        <AppCardsDiv>{this.renderAppCards()}</AppCardsDiv>
        {this.renderAppCreate(this.props.title)}
      </ColumnDiv>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const applications = _.pickBy(
    state.applications,
    (value, key) => value.status === ownProps.title
  );
  return {
    apps: Object.keys(applications)
  };
};

export default connect(mapStateToProps)(AppColumn);

import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import AppCard from "./AppCard";
import AppCreate from "./AppCreate";
import { Header, Label } from "semantic-ui-react";

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
      <div>
        <div className="row">
          <Header as="h3" block textAlign="left">
            {this.props.title}
            <Label circular color="black">
              {this.props.apps.length}
            </Label>
          </Header>
        </div>

        <div>{this.renderAppCards()}</div>
        {this.renderAppCreate(this.props.title)}
      </div>
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

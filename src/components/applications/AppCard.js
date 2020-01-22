import React from "react";
import { connect } from "react-redux";
import { Accordion } from "semantic-ui-react";
import AppEdit from "./AppEdit";
import AppDelete from "./AppDelete";

class AppCard extends React.Component {
  state = { activeIndex: null };
  renderCardTitle = application => {
    return (
      <div className="ui equal width grid">
        <div className="column">{application.position}</div>
        <div className="column">{application.company}</div>
        <div className="column">{application.location}</div>
      </div>
    );
  };
  renderCardContent = application => {
    return (
      <div>
        <p>Date Applied: {application.date}</p>
        <p>Site: {application.url}</p>
        <p>Resume: {application.resume}</p>
        <p>Notes: {application.notes}</p>
        <div className="ui equal width grid">
          <div className="column">
            <AppEdit id={this.props.id} application={this.props.application} />
          </div>
          <div className="column">
            <AppDelete
              id={this.props.id}
              application={this.props.application}
            />
          </div>
        </div>
      </div>
    );
  };
  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  render() {
    const { activeIndex } = this.state;
    const application = this.props.application;
    return (
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          {this.renderCardTitle(application)}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          {this.renderCardContent(application)}
        </Accordion.Content>
      </Accordion>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { application: state.applications[ownProps.id] };
};
export default connect(mapStateToProps)(AppCard);

import React from "react";
import { connect } from "react-redux";
import { Accordion } from "semantic-ui-react";
import styled from "styled-components";
import AppEdit from "./AppEdit";
import AppDelete from "./AppDelete";
import AppMove from "./AppMove";

const CardTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CardTitleHeader = styled.div`
  width: 32%;
`;
const CardTitleHeaderMiddle = styled(CardTitleHeader)`
  text-align: center;
`;
const CardTitleHeaderRight = styled(CardTitleHeader)`
  text-align: right;
`;
const CardButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CardButton = styled.div`
  width: auto;
`;

class AppCard extends React.Component {
  state = { activeIndex: null };
  renderCardTitle = application => {
    return (
      <CardTitleDiv>
        <CardTitleHeader>{application.position}</CardTitleHeader>
        <CardTitleHeaderMiddle>{application.company}</CardTitleHeaderMiddle>
        <CardTitleHeaderRight style={{ textAlign: "right" }}>
          {application.location}
        </CardTitleHeaderRight>
      </CardTitleDiv>
    );
  };
  renderCardContent = application => {
    return (
      <div>
        <p>Date Applied: {application.date}</p>
        <p>Site: {application.url}</p>
        <p>Resume: {application.resume}</p>
        <p>Notes: {application.notes}</p>
        <CardButtons>
          <CardButton>
            <AppEdit id={this.props.id} application={this.props.application} />
          </CardButton>
          <CardButton>
            <AppDelete
              id={this.props.id}
              application={this.props.application}
            />
          </CardButton>
          <CardButton>
            <AppMove
              id={this.props.id}
              status={this.props.application.status}
            />
          </CardButton>
        </CardButtons>
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
      <Accordion styled fluid>
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

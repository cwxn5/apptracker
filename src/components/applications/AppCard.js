import React from "react";
import { connect } from "react-redux";
import { UncontrolledCollapse } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "antd";

import styled from "styled-components";
import AppEdit from "./AppEdit";
import AppDelete from "./AppDelete";
import AppMove from "./AppMove";

const { Panel } = Collapse;

const CardTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
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
  margin-top: 1rem;
`;
const CardButton = styled.div`
  width: auto;
`;
const NotesButton = styled.button`
  border: none;
  padding: 0;
  outline: none;
  &:focus {
    outline: none;
  }
`;
const NotesDiv = styled.div`
  padding: 8px;
`;

class AppCard extends React.Component {
  state = { notesOpen: false };
  renderCardTitle = () => {
    return (
      <CardTitleDiv>
        <CardTitleHeader>{this.props.application.position}</CardTitleHeader>
        <CardTitleHeaderMiddle>
          {this.props.application.company}
        </CardTitleHeaderMiddle>
        <CardTitleHeaderRight style={{ textAlign: "right" }}>
          {this.props.application.location}
        </CardTitleHeaderRight>
      </CardTitleDiv>
    );
  };
  renderJobUrl = () => {
    if (this.props.application.url) {
      return (
        <p>
          <a
            href={this.props.application.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            Job Post
          </a>
        </p>
      );
    }
  };
  renderNotes = () => {
    if (this.props.application.notes) {
      return (
        <React.Fragment>
          <NotesButton onClick={this.handleNotesOpen} id="toggler">
            <FontAwesomeIcon
              icon={this.state.notesOpen ? faCaretDown : faCaretRight}
            />{" "}
            Show Notes
          </NotesButton>
          <UncontrolledCollapse toggler="#toggler">
            <NotesDiv>{this.props.application.notes}</NotesDiv>
          </UncontrolledCollapse>
        </React.Fragment>
      );
    }
  };
  renderCardContent = () => {
    return (
      <div>
        <p>Date Applied: {this.props.application.date}</p>
        {this.renderJobUrl()}
        <p>Resume: {this.props.application.resume}</p>
        {this.renderNotes()}
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
  handleNotesOpen = () => {
    this.setState({ notesOpen: !this.state.notesOpen });
  };
  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  render() {
    return (
      <Collapse accordion>
        <Panel showArrow={false} header={this.renderCardTitle()}>
          {this.renderCardContent()}
        </Panel>
      </Collapse>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { application: state.applications[ownProps.id] };
};
export default connect(mapStateToProps)(AppCard);

import React from "react";
import { connect } from "react-redux";
import { Collapse } from "antd";
import styled from "styled-components";

import AppEdit from "./AppEdit";
import AppDelete from "./AppDelete";
import AppMove from "./AppMove";
import Notes from "./AppCard/Notes";

const { Panel } = Collapse;

const CardTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
`;
const CardTitleHeaderCompany = styled.div`
  text-align: right;
  font-weight: ${props => (props.favorite ? "bold" : "normal")};
`;
const CardTitleHeaderPosition = styled.div`
  font-weight: ${props => (props.favorite ? "bold" : "normal")};
`;
const CardTitleHeaderLocation = styled.div`
  text-align: right;
  font-size: 10px;
  color: grey;
`;
const CardTitleDate = styled.div`
  font-size: 10px;
  color: grey;
`;
const CardButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;
const CardButton = styled.div`
  width: auto;
`;
const CollapseWrapper = styled(Collapse)`
  .ant-collapse-item {
    .ant-collapse-header {
      padding: 2px;
    }
  }
  .ant-collapse-item.ant-collapse-no-arrow > .ant-collapse-header {
    padding: 2px;
  }
`;

class AppCard extends React.Component {
  state = { notesOpen: false };
  renderCardTitle = () => {
    return (
      <CardTitleDiv>
        <div>
          <CardTitleHeaderPosition favorite={this.props.application.favorite}>
            {this.props.application.position}
          </CardTitleHeaderPosition>
          <CardTitleDate>{this.props.application.date}</CardTitleDate>
        </div>

        <div>
          <CardTitleHeaderCompany favorite={this.props.application.favorite}>
            {this.props.application.company}
          </CardTitleHeaderCompany>
          <CardTitleHeaderLocation>
            {this.props.application.location}
          </CardTitleHeaderLocation>
        </div>
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
  renderCardContent = () => {
    return (
      <div>
        {this.renderJobUrl()}
        <p>Resume: {this.props.application.resume}</p>
        <Notes notes={this.props.application.notes} />
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
    return (
      <CollapseWrapper>
        <Panel showArrow={false} header={this.renderCardTitle()}>
          {this.renderCardContent()}
        </Panel>
      </CollapseWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { application: state.applications[ownProps.id] };
};
export default connect(mapStateToProps)(AppCard);

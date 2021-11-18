import React from "react";
import { connect } from "react-redux";
import { Collapse } from "antd";
import AppEdit from "./AppForm/AppEdit";
import AppDelete from "./AppDelete";
import AppMove from "./AppMove";
import Notes from "./AppCard/Notes";
import * as Style from "../../styles/AppCard";

const { Panel } = Collapse;

class AppCard extends React.Component {
  state = { notesOpen: false };
  renderCardTitle = () => {
    return (
      <Style.CardTitleDiv>
        <div>
          <Style.CardTitleHeaderPosition
            favorite={this.props.application.favorite}
          >
            {this.props.application.position}
          </Style.CardTitleHeaderPosition>
          <Style.CardTitleDate>
            {this.props.application.date}
          </Style.CardTitleDate>
        </div>

        <div>
          <Style.CardTitleHeaderCompany
            favorite={this.props.application.favorite}
          >
            {this.props.application.company}
          </Style.CardTitleHeaderCompany>
          <Style.CardTitleHeaderLocation>
            {this.props.application.location}
          </Style.CardTitleHeaderLocation>
        </div>
      </Style.CardTitleDiv>
    );
  };
  renderJobUrl = () => {
    if (this.props.application.url) {
      return (
        <a
          href={this.props.application.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          Job Post
        </a>
      );
    }
  };
  renderCardContent = () => {
    return (
      <div>
        <Style.TwoColumnDiv>
          {this.renderJobUrl()}
          <div>Resume: {this.props.application.resume}</div>
        </Style.TwoColumnDiv>
        <Style.CardButtons>
          <Notes notes={this.props.application.notes} />
          <Style.CardButton>
            <AppEdit id={this.props.application.id} application={this.props.application} />
          </Style.CardButton>
          <Style.CardButton>
            <AppDelete
              id={this.props.application.id}
              application={this.props.application}
            />
          </Style.CardButton>
          <Style.CardButton>
            <AppMove id={this.props.id} application={this.props.application} />
          </Style.CardButton>
        </Style.CardButtons>
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
      <Style.CollapseWrapper>
        <Panel showArrow={false} header={this.renderCardTitle()}>
          {this.renderCardContent()}
        </Panel>
      </Style.CollapseWrapper>
    );
  }
}

export default AppCard;

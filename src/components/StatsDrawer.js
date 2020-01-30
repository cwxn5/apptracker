import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import moment from "moment";
import { Drawer, Statistic } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { device } from "../styles/device";

const IconWrapper = styled(FontAwesomeIcon)`
  cursor: pointer;
  @media ${device.mobileS} {
    font-size: 26px;
    padding-left: 4px;
  }
  @media ${device.tablet} {
    font-size: 40px;
    padding: 0 8px;
  }
`;
const StatsWrapper = styled.div`
  width: 100%;
  text-align: center;
`;
const StatsRow = styled.div`
  display: flex;
`;

const StatisticColumn = styled(Statistic)`
  flex: 50%;
`;

class StatsDrawer extends React.Component {
  state = { visible: false };
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };
  renderStats = () => {
    var now = moment();
    let today = 0;
    let last7days = 0;
    let lastMonth = 0;
    const dates = _.map(this.props.apps, "date");
    _.forEach(dates, function(date) {
      let diff = now.diff(moment(date, "MM-DD-YYYY"), "days");
      if (diff < 31) {
        lastMonth += 1;
        if (diff < 8) {
          last7days += 1;
          if (diff < 1) {
            today += 1;
          }
        }
      }
    });

    return (
      <StatsWrapper>
        <h4>Applications Added</h4>
        <StatsRow>
          <StatisticColumn
            style={{ flex: "50%" }}
            title="Today"
            value={today}
          />
          <StatisticColumn
            style={{ flex: "50%" }}
            title="Last 7 Days"
            value={last7days}
          />
        </StatsRow>
        <StatsRow>
          <StatisticColumn
            style={{ flex: "50%" }}
            title="Last Month"
            value={lastMonth}
          />
          <StatisticColumn
            style={{ flex: "50%" }}
            title="Total"
            value={Object.keys(this.props.apps).length}
          />
        </StatsRow>
      </StatsWrapper>
    );
  };
  render() {
    return (
      <div>
        <IconWrapper
          icon={faChartBar}
          size="2x"
          inverse
          onClick={this.showDrawer}
        >
          Stats
        </IconWrapper>
        <Drawer
          title="AppTracker Stats"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          {this.renderStats()}
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    apps: state.applications
  };
};

export default connect(mapStateToProps)(StatsDrawer);

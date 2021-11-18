import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import moment from "moment";
import { Drawer, Statistic } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { device } from "../styles/device";
import { themes } from "../styles/theme";
import { Doughnut } from "react-chartjs-2";

const IconWrapper = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: ${themes.default.color3};
  @media ${device.mobileS} {
    font-size: 26px;
    padding-left: 4px;
  }
  @media ${device.tablet} {
    font-size: 40px;
    padding: 4px 8px;
  }
`;
const StatsWrapper = styled.div`
  width: 100%;
  text-align: center;
`;
const StatsRow = styled.div`
  display: flex;
`;
const CitiesColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StatisticColumn = styled(Statistic)`
  flex: 50%;
`;

class StatsDrawer extends React.Component {
  state = { visible: false };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  renderCityStats = () => {
    if (this.props.apps.length) {
      return (
        <StatsWrapper>
          <h2>Cities</h2>
          <CitiesColumn>{this.renderCities()}</CitiesColumn>
        </StatsWrapper>
      );
    }
  };
  renderCities() {
    const cities = this.getCityStats();
    return cities.map((cityInfo) => {
      let cityApps = _.filter(this.props.apps, { location: cityInfo[0] });
      let status = _.countBy(cityApps, "status");
      let applied = status.Applied || 0;
      let interview = status.Interview || 0;
      let offer = status.Offer || 0;
      let rejected = status.Rejected || 0;
      const data = {
        labels: ["Applied", "Interview", "Offer", "Rejected"],
        datasets: [
          {
            data: [applied, interview, offer, rejected],
            backgroundColor: [
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(255, 99, 132, 1)",
            ],
          },
        ],
      };
      const options = {
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: cityInfo[0],
            padding: {
              top: 10,
              bottom: 10,
            },
            font: {
              size: 20,
              family: "'Montserrat', sans-serif",
              weight: 'normal',
            },
            fullSize: true,

          },
        },
      };
      return <Doughnut data={data} options={options} />;
    });
  }
  getCityStats = () => {
    const locations =
      Object.entries(_.countBy(this.props.apps, "location"));
    console.log('locations: ', locations);
    let sorted = locations.sort(function (a, b) {
      if (a[1] === b[1]) {
        if (a[0] < b[0]) {
          return -1;
        }
        if (a[0] > b[0]) {
          return 1;
        }
        return 0;
      }
      return b[1] - a[1];
    });
    return sorted;
  };
  renderStats = () => {
    var now = moment();
    let today = 0;
    let last7days = 0;
    let lastMonth = 0;
    const dates = _.map(this.props.apps, "date");
    _.forEach(dates, function (date) {
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
        <h2>New Applications</h2>
        <StatsRow>
          <StatisticColumn title="Today" value={today} />
          <StatisticColumn title="Last 7 Days" value={last7days} />
        </StatsRow>
        <StatsRow>
          <StatisticColumn title="Last Month" value={lastMonth} />
          <StatisticColumn
            title="Total"
            value={this.props.apps.length}
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
          width="300"
        >
          {this.renderStats()}
          {this.renderCityStats()}
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    apps: state.applications.applications,
  };
};

export default connect(mapStateToProps)(StatsDrawer);

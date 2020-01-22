import React from "react";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import { Select } from "antd";
import { moveApplication } from "../../actions/applications";
import { columnTypes } from "./columnTypes";

const { Option } = Select;

class AppMove extends React.Component {
  handleChange = value => {
    this.props.moveApplication(value, this.props.id);
  };
  renderOptions() {
    return columnTypes.map(column => {
      if (column !== this.props.status) {
        return (
          <Option key={column} value={column}>
            {column}
          </Option>
        );
      }
      return undefined;
    });
  }

  render() {
    return (
      <Select
        style={{ width: 120 }}
        defaultValue={this.props.status}
        onChange={this.handleChange}
      >
        {this.renderOptions()}
      </Select>
    );
  }
}

export default connect(null, { moveApplication })(AppMove);

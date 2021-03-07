import React from "react";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import { Select } from "antd";
import { editApplication } from "../../actions/applications";
import { columnTypes } from "./columnTypes";

const { Option } = Select;

class AppMove extends React.Component {
  handleChange = (value) => {
    this.props.editApplication(
      { ...this.props.application, status: value },
      this.props.id
    );
  };
  renderOptions() {
    return columnTypes.map((column) => {
      if (column !== this.props.application.status) {
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
        defaultValue="Move App"
        onChange={this.handleChange}
      >
        {this.renderOptions()}
      </Select>
    );
  }
}

export default connect(null, { editApplication })(AppMove);

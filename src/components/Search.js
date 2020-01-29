import React from "react";
import { connect } from "react-redux";
import { Input, Select } from "antd";

import { setTextFilter, setSearchOption } from "../actions/filters";

const { Option } = Select;

class Search extends React.Component {
  handleOptionChange = value => {
    this.props.setSearchOption(value);
  };
  selectAfter = () => {
    return (
      <Select onChange={this.handleOptionChange} defaultValue="company">
        <Option value="company">Company</Option>
        <Option value="location">Location</Option>
      </Select>
    );
  };
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };
  render() {
    return (
      <Input
        addonAfter={this.selectAfter()}
        placeholder="Search by"
        onChange={this.onTextChange}
        allowClear
        style={{ width: "220px" }}
      ></Input>
    );
  }
}

const mapStateToProps = (state = {}) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps, { setTextFilter, setSearchOption })(
  Search
);
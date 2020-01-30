import React from "react";
import { connect } from "react-redux";
import { Input, Select } from "antd";
import styled from "styled-components";

import { setTextFilter, setSearchOption } from "../actions/filters";

const { Option } = Select;

const InputWrapper = styled(Input)`
  width: 95%;
`;

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
      <InputWrapper
        addonAfter={this.selectAfter()}
        placeholder="Search by"
        onChange={this.onTextChange}
        allowClear
      ></InputWrapper>
    );
  }
}

const mapStateToProps = (state = {}) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps, { setTextFilter, setSearchOption })(
  Search
);

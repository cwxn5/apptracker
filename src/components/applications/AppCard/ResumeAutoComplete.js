import React from "react";
import { connect } from "react-redux";
import { AutoComplete } from "antd";
import _ from "lodash";

class ResumeAutoComplete extends React.Component {
  render() {
    return (
      <AutoComplete
        {...this.props.input}
        dataSource={this.props.resumes}
        filterOption={(inputValue, option) =>
          option.props.children
            .toUpperCase()
            .indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    );
  }
}
const mapStateToProps = state => {
  const resumes = _.compact(_.uniq(_.map(state.applications, "resume")));
  return { resumes };
};
export default connect(mapStateToProps)(ResumeAutoComplete);

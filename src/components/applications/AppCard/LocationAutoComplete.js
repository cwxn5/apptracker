import React from "react";
import { connect } from "react-redux";
import { AutoComplete } from "antd";
import _ from "lodash";

class LocationAutoComplete extends React.Component {
  render() {
    return (
      <AutoComplete
        {...this.props.input}
        dataSource={this.props.locations}
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
  const locations = _.uniq(_.map(state.applications.applications, "location"));
  return { locations };
};
export default connect(mapStateToProps)(LocationAutoComplete);

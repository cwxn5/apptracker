import React from "react";
import AppColumn from "./AppColumn";
import { columnTypes } from "./columnTypes";
import { AppPageDiv } from "../../styles/AppPage";

class AppPage extends React.Component {
  renderColumns() {
    return columnTypes.map(column => {
      return <AppColumn key={column} title={column} />;
    });
  }
  render() {
    return <AppPageDiv>{this.renderColumns()}</AppPageDiv>;
  }
}

export default AppPage;

import React from "react";
import styled from "styled-components";
import AppColumn from "./AppColumn";
import { columnTypes } from "./columnTypes";

const AppPageDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

class AppPage extends React.Component {
  renderColumns() {
    return columnTypes.map(column => {
      return <AppColumn title={column} />;
    });
  }
  render() {
    return <AppPageDiv>{this.renderColumns()}</AppPageDiv>;
  }
}

export default AppPage;

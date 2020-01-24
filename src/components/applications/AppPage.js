import React from "react";
import styled from "styled-components";
import AppColumn from "./AppColumn";
import { columnTypes } from "./columnTypes";

const AppPageDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  height: calc(100vh - 54px);
`;

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

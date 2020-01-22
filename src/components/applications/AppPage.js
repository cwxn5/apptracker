import React from "react";
import AppColumn from "./AppColumn";
import { columnTypes } from "./columnTypes";

class AppPage extends React.Component {
  renderColumns() {
    return columnTypes.map(column => {
      return (
        <div className="four wide column" key={column}>
          <AppColumn title={column} />
        </div>
      );
    });
  }
  render() {
    return <div className="ui grid">{this.renderColumns()}</div>;
  }
}

export default AppPage;

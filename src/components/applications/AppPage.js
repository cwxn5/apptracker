import React, { useEffect } from "react";
import { connect } from "react-redux";
import AppColumn from "./AppColumn";
import { columnTypes } from "./columnTypes";
import { AppPageDiv } from "../../styles/AppPage";
import { fetchApplications } from "../../actions/applications";

const AppPage = ({ fetchApplications }) => {
  useEffect(() => {
    fetchApplications();
  }, []);
  const renderColumns = () => {
    return columnTypes.map((column) => {
      return <AppColumn key={column} title={column} />;
    });
  };
  return <AppPageDiv>{renderColumns()}</AppPageDiv>;
};

export default connect(null, { fetchApplications })(AppPage);

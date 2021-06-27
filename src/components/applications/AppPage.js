/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";

import AppColumn from "./AppColumn";
import { columnTypes } from "./columnTypes";
import { AppPageDiv } from "../../styles/AppPage";
import { fetchApplications } from "../../actions/applications";

import { Carousel } from "antd";

const AppPage = ({ fetchApplications }) => {
  useEffect(() => {
    fetchApplications();
  }, []);
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const renderColumns = () => {
    return columnTypes.map((column) => {
      return <AppColumn key={column} title={column} />;
    });
  };
  if (isMobile) {
    return (
      <Carousel dotPosition='top'>
        {renderColumns()}
      </Carousel>
    );
  }
  return <AppPageDiv>{renderColumns()}</AppPageDiv>;
};

export default connect(null, { fetchApplications })(AppPage);

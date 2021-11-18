/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import AppColumn from "./AppColumn";
import { columnTypes } from "./columnTypes";
import { AppPageDiv } from "../../styles/AppPage";

import { fetchApplications } from "../../actions/applications";
import { fetchApplicationGroups } from "../../actions/applicationGroups";

import { getDefaultApplicationGroup } from "../../selectors/applicationGroups";

import { Carousel } from "antd";

const AppPage = ({ fetchApplications, fetchApplicationGroups }) => {
  const defaultApplicationGroupName = useSelector(state => getDefaultApplicationGroup(state.applicationGroups))
  useEffect(() => {
    fetchApplications();
    fetchApplicationGroups();
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

export default connect(null, { fetchApplications, fetchApplicationGroups })(AppPage);

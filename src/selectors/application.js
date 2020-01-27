import _ from "lodash";

const getFilteredApplications = (applications, { text, option }, status) => {
  let columnApplications = _.omitBy(
    applications,
    value => value.status !== status
  );
  if (!text) {
    return columnApplications;
  }
  let result = {};
  if (option === "location") {
    result = _.omitBy(
      columnApplications,
      application =>
        !application.location.toLowerCase().startsWith(text.toLowerCase())
    );
  } else {
    result = _.omitBy(
      columnApplications,
      application =>
        !application.company.toLowerCase().includes(text.toLowerCase())
    );
  }
  return result;
};

export default getFilteredApplications;

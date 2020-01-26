import _ from "lodash";

const getFilteredApplications = (applications, { text }, status) => {
  let columnApplications = _.omitBy(
    applications,
    value => value.status !== status
  );
  const result = _.omitBy(
    columnApplications,
    application =>
      !application.company.toLowerCase().includes(text.toLowerCase())
  );
  return result;
};

export default getFilteredApplications;
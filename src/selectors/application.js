const getFilteredApplications = (applications, { text, option }, status) => {
  let columnApplications = applications.filter(application => application.status === status)

  if (!text) {
    return columnApplications;
  }
  let result = {};
  if (option === "location") {
    result = columnApplications.filter(application => application.location.toLowerCase().startsWith(text.toLowerCase()));
  } else {
    result = columnApplications.filter(application => application.company.toLowerCase().startsWith(text.toLowerCase()));
  }
  return result;
};

export default getFilteredApplications;

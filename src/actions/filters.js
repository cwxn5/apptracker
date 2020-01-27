//SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});
export const setSearchOption = (option = "company") => ({
  type: "SET_SEARCH_OPTION",
  option
});

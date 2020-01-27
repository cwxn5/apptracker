//filters reducer
const filtersReducerDefaultState = {
  text: "",
  option: "company"
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SET_SEARCH_OPTION":
      return { ...state, option: action.option };
    default:
      return state;
  }
};

export default filtersReducer;

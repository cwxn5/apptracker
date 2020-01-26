import { combineReducers } from "redux";
import applicationReducer from "../reducers/applicationReducer";
import authReducer from "../reducers/authReducer";
import filtersReducer from "../reducers/filtersReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  applications: applicationReducer,
  auth: authReducer,
  form: formReducer,
  filters: filtersReducer
});

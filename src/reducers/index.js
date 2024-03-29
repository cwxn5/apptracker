import { combineReducers } from "redux";
import applicationReducer from "../reducers/applicationReducer";
import authReducer from "../reducers/authReducer";
import filtersReducer from "../reducers/filtersReducer";
import settingsReducer from "../reducers/settingsReducer";
import { reducer as formReducer } from "redux-form";
import applicationGroupReducer from "./applicationGroupReducer";

export default combineReducers({
  applications: applicationReducer,
  auth: authReducer,
  form: formReducer,
  filters: filtersReducer,
  userSettings: settingsReducer,
  applicationGroups: applicationGroupReducer
});

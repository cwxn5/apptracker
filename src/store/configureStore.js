import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const composeEnhancers = process.env.PRODUCTION
  ? compose
  : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export default () => {
  return createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
};

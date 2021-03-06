import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import configureStore from "./store/configureStore";
import { firebase } from "./firebase/firebase";
import { login, logout } from "./actions/auth";
import Loader from "./components/Loader";
import { LoginPage } from "./components/LoginPage";
import { fetchSettings } from "./actions/userSettings";
import "./styles/base.css";

const store = configureStore();

const jsxLoggedIn = (
  <Provider store={store}>
    <App />
  </Provider>
);
const jsxLoggedOut = (
  <Provider store={store}>
    <LoginPage />
  </Provider>
);

const renderApp = (userLoggedIn) => {
  if (userLoggedIn) {
    ReactDOM.render(jsxLoggedIn, document.querySelector("#root"));
  } else {
    ReactDOM.render(jsxLoggedOut, document.querySelector("#root"));
  }
};

ReactDOM.render(<Loader />, document.querySelector("#root"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user));
    store.dispatch(fetchSettings());
    renderApp(true);
  } else {
    renderApp(false);
    store.dispatch(logout());
  }
});

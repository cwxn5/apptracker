import React from "react";
import { render, screen } from "@testing-library/react";
import firebase from "firebase/app";

import App from "./App";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";


// Now mock 'firebase/app`:
jest.mock("firebase/app", () => {
  const firebasemock = require("firebase-mock");
  const mockauth = new firebasemock.MockAuthentication();
  const mockfirestore = new firebasemock.MockFirestore();
  return new firebasemock.MockFirebaseSdk(
    null, // RTDB
    () => mockauth,
    () => mockfirestore
  );
});
describe("App", function () {
  const store = configureStore();
  beforeAll(() => {
    // Add some data to your mock firebase if you need to...
  });
  it("renders App - not logged in", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText("AppTracker")).toBeInTheDocument();
  });
});

import React from "react";
import NavBar from "./NavBar";

import AppPage from "./applications/AppPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <AppPage />
      </div>
    );
  }
}

export default App;

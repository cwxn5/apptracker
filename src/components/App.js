import React from "react";
import Header from "./NavBar";

import AppPage from "./applications/AppPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AppPage />
      </div>
    );
  }
}

export default App;

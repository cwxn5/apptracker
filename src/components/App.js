import React from "react";
import NavBar from "./NavBar";

import AppPage from "./applications/AppPage";
import { Container } from "semantic-ui-react";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container style={{ width: "95%" }}>
          <AppPage />
        </Container>
      </div>
    );
  }
}

export default App;

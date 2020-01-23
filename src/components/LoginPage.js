import React from "react";
import { connect } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
import { startLogin } from "../actions/auth";
import background from "../images/background.jpg";

var styles = {
  body: {
    height: "100vh",
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  verticalCenter: {
    margin: "0",
    position: "absolute",
    top: "50%",
    msTransform: "translateY(-50%)",
    transform: "translateY(-50%)",
    paddingLeft: "20%"
  }
};

export const LoginPage = () => (
  <div style={styles.body}>
    <div style={styles.verticalCenter}>
      <div className="ui centered middle aligned grid">
        <div className="column">
          <h1 className="ui header">AppTracker</h1>
          <p>Here to help you organize the job hunt.</p>
          <Button onClick={startLogin} color="google plus">
            <Icon name="google" /> Login with Google
          </Button>
        </div>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

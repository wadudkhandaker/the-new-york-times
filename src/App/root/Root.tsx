import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "../../modules/core/protected-route/protected-route";
import App from "../App";

const Root: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <PrivateRoute path="" component={App} exact />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default Root;

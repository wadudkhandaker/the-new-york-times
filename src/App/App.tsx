import React from "react";
import AntLayout from "../modules/ant-theme/ant-layout";
import { Route, Redirect, Switch } from "react-router-dom";
import { Navigation } from "./routers/routes";
import AppAPIS from "./components/apis/app-apis";
import AppHome from "./components/home/app-home";

const config = {
  navigation: Navigation,
  header: {
    language: [{ lang: "en", name: "EN" }],
    companyLogo: true
  }
};

const App: React.FC = (props: any) => {
  return (
    <div className="App">
      <Switch>
        <AntLayout config={config}>
          {props.location.pathname === "/" ? (
            <Redirect to="/home" exact />
          ) : (
            ""
          )}
          <Route path="/home" component={AppHome} />
          <Route path="/apis" component={AppAPIS} />
        </AntLayout>
      </Switch>
    </div>
  );
};

export default App;

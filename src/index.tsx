import React from "react";
import ReactDOM from "react-dom";
import "./modules/core/Interceptor/axios-interceptors";
import "./i18n/i18";
import "./index.scss";
import { DEV_ENV } from "./env/dev-env";

import Root from "./App/root/Root";
import * as serviceWorker from "./serviceWorker";

if (window) {
  let global: any = window;
  global["DOMAIN_PROVIDER"] = DEV_ENV;
}

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

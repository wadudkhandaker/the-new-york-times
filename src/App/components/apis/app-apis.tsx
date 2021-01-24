import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";

class AppAPIS extends React.Component<{} & WithTranslation> {
  render() {
    return (
      <React.Fragment>
        <h3>App APIS</h3>
      </React.Fragment>
    );
  }
}

export default withTranslation()(AppAPIS);

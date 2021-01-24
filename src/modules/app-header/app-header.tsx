import React from "react";
import { Layout, Select } from "antd";
import Icon from '@ant-design/icons';
import { withTranslation, WithTranslation } from "react-i18next";
import "./app-header.scss";
import { IRouter } from "../../modules/model/router-model";
import AppMenu from "../app-menu/app-menu";

const { Header } = Layout;
const { Option } = Select;
const global: any = window;

interface IPros {
  toggle: any;
  collapsed: boolean;
  header: any;
  navigation: IRouter[],
  lastLocation: string
}

class AppHeader extends React.Component<IPros & WithTranslation> {
  handleLocalChange = (lang: string) => {
    this.props.i18n.changeLanguage(lang);
  };
  render() {
    return (
      <React.Fragment>
        <div className="nav-header">
          <Header>
            {this.props.header ? (
              <div className="header-component">
                {this.props.header.companyLogo ? (
                  <div className="company-logo">
                    <img src="./assets/logo.PNG" alt="company name" />
                  </div>
                ) : (
                    ""
                  )}

                {this.props.navigation.length > 0 ? (
                  <div className="menu-option">
                    <AppMenu
                      navigation={this.props.navigation}
                      lastLocation={this.props.lastLocation}
                    />
                  </div>
                ) : (
                    ""
                  )}
              </div>
            ) : (
                ""
              )}
          </Header>
        </div>

      </React.Fragment>
    );
  }
}

export default withTranslation()(AppHeader);

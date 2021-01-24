import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "./app-menu.scss";
import { IRouter } from "../model/router-model";
import { withTranslation, WithTranslation } from "react-i18next";
interface IProps {
  navigation: IRouter[];
  lastLocation: string;
}

class AppMenu extends React.Component<IProps & WithTranslation> {
  render() {
    return (
      <React.Fragment>
        <Menu
            mode="horizontal"
            defaultSelectedKeys={[this.props.lastLocation]}
          >
            {this.props.navigation.map((r, i) => (
              <Menu.Item key={r.path}>
                {(r.isExternal ? 
                  (
                    <Link to={r.path} target="_blank">
                      <span className="navbar-name">{this.props.t(r.name)}</span>
                    </Link>
                  ) 
                  : (
                    <Link to={r.path}>
                    <span className="navbar-name">{this.props.t(r.name)}</span>
                  </Link>
                  ) 
                )}
              </Menu.Item>
            ))}
          </Menu>
      </React.Fragment>
    );
  }
}

export default withTranslation()(AppMenu);

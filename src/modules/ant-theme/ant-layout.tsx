import React from "react";
import "antd/dist/antd.css";
import "./applayout.scss";
import { Layout } from "antd";
import AppHeader from "../app-header/app-header";
import { IProps, IState } from "./model";

const { Content } = Layout;

class AntLayout extends React.Component<IProps, IState> {
  state: any = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    let lastLocation = this.props.location.pathname.replace("/", "");
    return (
      <React.Fragment>
          <Layout>
            <AppHeader
              toggle={this.toggle}
              collapsed={this.state.collapsed}
              header={this.props.config.header}
              navigation={this.props.config.navigation}
              lastLocation={lastLocation}
            />
            <Content className="contain-wrapper">{this.props.children}</Content>
          </Layout>
      </React.Fragment>
    );
  }
}

export default AntLayout;

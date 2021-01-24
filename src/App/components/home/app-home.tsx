import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import "./app-home.scss";
import { Card } from 'antd';
import Icon from '@ant-design/icons';

class AppHome extends React.Component<{} & WithTranslation> {
  state = {
    data: [
      {
        key: "1",
        title: "John Brown",
        icon: "CheckCircleOutlined",
        content: "Learn how to sign up for an API key."
      },
      {
        key: "2",
        title: "APIs",
        icon: "BookOutlined",
        content: "Learn about and try out NYT's APIs."
      },
      {
        key: "3",
        title: "FAQ",
        icon: "MessageOutlined",
        content: "Get answers to frequently asked questions."
      },
      {
        key: "4",
        title: "EditOutlined",
        icon: "CheckCircleOutlined",
        content: "ead about NYT's branding & attribution requirements."
      },
      {
        key: "5",
        title: "Covid-19 Data",
        icon: "DotChartOutlined",
        content: "Get info about NYT Covid-19 data."
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div className="banner">
          <div className="banner-content">
            <h1 className="title"> The New York Times Developer Network </h1>
            <h2 className="subtitle"> All the <em><a href="/apis">APIs</a></em> Fit to Post </h2>
            <a className="get-started" href="/get-started"><span> Get Started </span></a>
          </div>
        </div>
        <div className="home-page-cards">
        {this.state.data.map((data, i) => (
                <Card key={data.key} title={data.title} style={{ width: '100%' }} className="card-box">
                  <p>{data.content}</p>
                </Card>
            ))}
          
        </div>
      </React.Fragment>
    );
  }
}

export default withTranslation()(AppHome);

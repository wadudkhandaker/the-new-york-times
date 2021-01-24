import { IRouter } from "../../modules/model/router-model";

export const Navigation: IRouter[] = [
  {
    path: "home",
    name: "Home"
  },
  {
    path: "apis",
    name: "APIs"
  },
  {
    path: "https://github.com/nytimes/covid-19-data",
    name: "Covid-19 Data",
    isExternal: true
  },
  {
    path: "get-started",
    name: "Get Started"
  },
  {
    path: "sign-in",
    name: "Sign In"
  }
];

import { IRouter } from "../model/router-model";

export interface IState {
  collapsed: boolean;
}
export interface IProps {
  children: any;
  config: {
    navigation: IRouter[];
    header?: Object;
  };
  location?: any;
}

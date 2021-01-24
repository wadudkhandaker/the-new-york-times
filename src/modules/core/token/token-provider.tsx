import axios from "axios";
const GLOBAL: any = window;

export const GetRefreshToken = (): string => {
  return String(localStorage.getItem("refresh_token")).trim();
};

export const GetAccessToken = (): string => {
  return String(localStorage.getItem("access_token")).trim();
};

export const SetAccessToken = (access_token: string): void => {
  localStorage.setItem("access_token", access_token);
};

export const GetTokenFromRefreshToken = (error: any) => {
  return axios
    .post(
      GLOBAL["DOMAIN_PROVIDER"]["DOMAIN"] +
        GLOBAL["DOMAIN_PROVIDER"]["REFRESH_TOKEN"],
      {
        refreshToken: GetRefreshToken()
      }
    )
    .then(res => {
      SetAccessToken(res.data.token);
      return axios(error.response.config);
    })
    .catch(err => {
      alert("logout..");
      return Promise.reject(err);
    });
};

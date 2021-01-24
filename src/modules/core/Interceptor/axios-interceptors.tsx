import axios from "axios";
import {
  GetAccessToken,
  GetTokenFromRefreshToken
} from "../token/token-provider";

axios.interceptors.request.use((request: any) => {
  request["headers"]["Authorization"] = "bearer " + GetAccessToken();
  // console.log("SET AUTH HEADER FROM Interceptor: 🐒 ");
  return request;
});

// 🐒 🐒 🐒 🐒
axios.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    console.log(error);
    if (error && error.response && error.response.status === 401) {
      return GetTokenFromRefreshToken(error);
    }
    return Promise.reject(error);
  }
);

import axios, { AxiosRequestConfig } from "axios";
import history from "../util/history";
import qs from "qs";

type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: string;
  scope: string;
  userName: string;
  userId: string;
};

type LoginData = {
  username: string;
  password: string;
};

export const BASE_URL = "https://movieflix-devsuperior.herokuapp.com";
export const CLIENT_ID = "myclientid";
export const CLIENT_SECRET = "myclientsecret";

export const requestBackendLogin = (loginData: LoginData) => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
  };

  const data = qs.stringify({
    ...loginData,
    grant_type: "password",
  });

  return axios({
    method: "POST",
    baseURL: BASE_URL,
    url: "/oauth/token",
    headers,
    data,
  });
};

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: "Bearer " + getAuthData().access_token,
      }
    : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers });
};

export const getAuthData = () => {
  return JSON.parse(localStorage.getItem("authKey") ?? "{}") as LoginResponse;
};

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401 || error.response.status === 403) {
      history.push("/oauth/token");
    }

    return Promise.reject(error);
  }
);

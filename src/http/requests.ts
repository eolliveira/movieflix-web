import axios from "axios";
import qs from "qs";
import history from "../util/history";
import jwtDecode from "jwt-decode";
import { TokenData } from "../types/TokenData";

type LoginData = {
  username: string;
  password: string;
};

type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: string;
  scope: string;
  userName: string;
  userId: string;
};

const baseUrl = "https://movieflix-devsuperior.herokuapp.com";
const CLIENT_ID = "myclientid";
const CLIENT_SECRET = "myclientsecret";

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
    baseURL: baseUrl,
    url: "/oauth/token",
    headers,
    data,
  });
};

export const saveAuthData = (loginResponse: LoginResponse) => {
  localStorage.setItem("authKey", JSON.stringify(loginResponse));
};

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (error.response.status === 401 || error.response.status === 403) {
      history.push("/oauth/token");
    }

    return Promise.reject(error);
  }
);

export const getAuthData = () => {
  return JSON.parse(localStorage.getItem("authKey") ?? "{}") as LoginResponse;
};

export const getTokenData = (): TokenData | undefined => {
  try {
    return jwtDecode(getAuthData().access_token) as TokenData;
  } catch (error) {
    return undefined;
  }
};

export const isAuthenticated = (): boolean => {
  const tokenData = getTokenData();
  return tokenData && tokenData?.exp * 1000 > Date.now() ? true : false;
};

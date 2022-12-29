import axios from "axios";

import jwtDecode from "jwt-decode";
import { TokenData } from "../types/TokenData";
import { getAuthData } from "../http/requests";
import { Role } from "../types/Role";

export const isAuthenticated = (): boolean => {
  const tokenData = getTokenData();
  return tokenData && tokenData?.exp * 1000 > Date.now() ? true : false;
};

export const hasAnyHole = (roles: Role[]): boolean => {
  if (roles.length === 0) return true;

  const tokenData = getTokenData();

  if (tokenData !== undefined) {
    return roles.some((role) => tokenData.authorities.includes(role));
  }

  return false;
};

export const getTokenData = (): TokenData | undefined => {
  try {
    return jwtDecode(getAuthData().access_token) as TokenData;
  } catch (error) {
    return undefined;
  }
};

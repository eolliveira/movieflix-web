type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: string;
  scope: string;
  userFirstName: string;
  userId: string;
};

export const saveAuthData = (loginResponse: LoginResponse) => {
  localStorage.setItem("authKey", JSON.stringify(loginResponse));
};

export const getAuthData = () => {
  return JSON.parse(localStorage.getItem("authKey") ?? "{}") as LoginResponse;
};

export const removeAuthData = () => {
  localStorage.removeItem("authKey");
};

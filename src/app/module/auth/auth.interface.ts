export interface TLoginUser {
  email: string;
  password: string;
}

export interface TAuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
  };
  token: string;
}

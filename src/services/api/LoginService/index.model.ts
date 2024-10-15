export interface ILoginPayload {
  username: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  refreshToken: string;
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

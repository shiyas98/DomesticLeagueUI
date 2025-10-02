export interface UserData {
  uid: number;
  email?: string | null;
  token?: string | null;
  name?: string | null;
  agent?: string | null;
}

export interface UserLoginResponse {
  result: number;
  message: string | null;
  errors: string[];
  data: UserData;
}

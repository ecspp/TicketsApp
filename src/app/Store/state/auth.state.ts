export interface AuthState {
  isLoggedIn: boolean,
  token: string,
  refreshToken: string,
  attempts: number
}

export const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
  refreshToken: null,
  attempts: 0
}

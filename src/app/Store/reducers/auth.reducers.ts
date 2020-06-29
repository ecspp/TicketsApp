import * as AuthActions from "../actions/auth.actions";
import { Action, createReducer, on } from '@ngrx/store';
import { initialState, AuthState } from '../state/auth.state';


const _authReducer = createReducer(initialState,
  on(AuthActions.login, state => ({...state, isLoggedIn: false})),
  on(AuthActions.loginSuccess, (state, {response}) => ({
    isLoggedIn: true,
    token: response.token,
    refreshToken: response.refreshToken
  })),
  on(AuthActions.loginFail, (state: AuthState) => ({
    ...state, attempts: state.attempts + 1
  })),
  on(AuthActions.logout, () => (initialState))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}

import { AuthState } from '../state/auth.state';
import { createSelector } from '@ngrx/store';

export const selectAuthState = (state: AuthState) => state;

export const selectLoginStatus = createSelector(
  selectAuthState,
  (state: AuthState) => state.isLoggedIn
);

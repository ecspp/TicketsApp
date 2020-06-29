import { createAction, props } from "@ngrx/store";
import { LoginRequest } from 'src/app/Models/Api/Request/LoginRequest';
import { AuthSuccessResponse } from 'src/app/Models/Api/Response/AuthSuccessResponse';
import { HttpErrorResponse } from '@angular/common/http';
import { RefreshTokenRequest } from 'src/app/Models/Api/Request/RefreshTokenRequest';

export enum EAuthActions {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFail = '[Auth] Login Fail',
  Logout = '[Auth] Logout',
  Refresh = '[Auth] Refresh Token',
  RefreshFail = '[Auth] Refres Token Fail'
}



export const login = createAction(
  EAuthActions.Login,
  props<{data: LoginRequest}>()
);

export const loginSuccess = createAction(
  EAuthActions.LoginSuccess,
  props<{response: AuthSuccessResponse}>()
);

export const loginFail = createAction(
  EAuthActions.LoginFail,
  props<{error: HttpErrorResponse}>()
);

export const logout = createAction(
  EAuthActions.Logout
);

export const refresh = createAction(
  EAuthActions.Refresh,
  props<{payload: RefreshTokenRequest}>()
)

import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { AuthService } from 'src/app/Services/auth.service';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import * as AuthActions from "../actions/auth.actions";
import * as AppActions from "../actions/app.actions";
import { of, EMPTY } from 'rxjs';
import { AuthSuccessResponse } from 'src/app/Models/Api/Response/AuthSuccessResponse';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => this.action$.pipe(
      ofType(AuthActions.login),
      exhaustMap(action =>
        this.authService.login(action.data).pipe(
          map((response: AuthSuccessResponse) => AuthActions.loginSuccess({response: response})),
          catchError((err: HttpErrorResponse) => of(AuthActions.loginFail({error: err})))
        )
      )
    )
  );

  loginSuccess$ = createEffect(() => this.action$.pipe(
    ofType(AuthActions.loginSuccess),
    tap(() => this.router.navigate(['/app/dashboard'])),
  ), {dispatch: false});

  logout$ = createEffect(() => this.action$.pipe(
    ofType(AuthActions.logout),
    exhaustMap(
      () => of(AppActions.reset()),
    )
  ));

  constructor(
    private action$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}

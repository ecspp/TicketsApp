import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as AppActions from "../actions/app.actions";
import { Router } from '@angular/router';

@Injectable()
export class AppEffects {
  login$ = createEffect(() => this.action$.pipe(
    ofType(AppActions.reset),
    tap(() => this.router.navigate(['/login']))
  ), {dispatch: false});

  constructor(
    private action$: Actions,
    private router: Router
  ) {}
}

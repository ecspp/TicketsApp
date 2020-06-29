import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppState } from '../Store/state/app.state';
import { Store } from '@ngrx/store';
import { first, flatMap } from 'rxjs/operators';
import { logout } from '../Store/actions/auth.actions';
import { checkToken, JWTTokenStatus } from '../Utils/jwt.utils';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<IAppState>) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.get("skipToken")) {
      return next.handle(req);
    }

    return this.store.select(state => state.auth).pipe(
      first(),
      flatMap(auth => {
        const tokenStatus = checkToken(auth.token);

        if (tokenStatus == JWTTokenStatus.INVALID) {
          this.store.dispatch(logout());
        }

        if (tokenStatus == JWTTokenStatus.EXPIRED) {
          //TODO: auto refresh token
          console.log('TOKEN EXPIRED!');
          this.store.dispatch(logout());
        }


        const authReq = auth.isLoggedIn && (tokenStatus == JWTTokenStatus.VALID) ? req.clone({
          setHeaders: {'Authorization': 'Bearer ' + auth.token}
        }) : req;

        return next.handle(authReq);
      })
    )
  }
}

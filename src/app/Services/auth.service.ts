import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoginRequest } from '../Models/Api/Request/LoginRequest';
import { AuthSuccessResponse } from '../Models/Api/Response/AuthSuccessResponse';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl: string;

  skipTokenHeader = new HttpHeaders({"skipToken": "true"})

  constructor(private http: HttpClient) {
    this.loginUrl = environment.apiUrl + 'auth/login';
   }

  login(request: LoginRequest): Observable<AuthSuccessResponse> {
    return this.http.post<AuthSuccessResponse>(this.loginUrl, request, {headers: this.skipTokenHeader});
  }

}

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { register } from 'module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  signUp(userObj: any) {
    return this.http.post<any>(this.baseApiUrl + "/User/register", userObj);
  }

  login(loginObj: any) {
    return this.http.post<any>(this.baseApiUrl + "/User/authenticate", loginObj);
  }
}

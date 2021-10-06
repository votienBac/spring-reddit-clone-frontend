import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { LoginRequestPayload } from '../login/login-request.payload';
import { LoginResponse } from '../login/login-response.payload';
import { SignupRequestPayload } from '../sign-up/signup-request.payload';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }
  signup(signupRequestPayload: SignupRequestPayload): void{
     this.http.post('http://localhost:8080/api/auth/signup', signupRequestPayload, {responseType: 'text'}).subscribe(()=>{
         console.log('Sign up Successful');
        }, ()=> {console.log('Sign up failed');});

  }
  login(loginRequestPayload: LoginRequestPayload):Observable<boolean> {
     return this.http.post<LoginResponse>('http://localhost:8080/api/auth/login', loginRequestPayload).pipe(map(data => {
           this.localStorage.store('authenticationToken', data.authenticationToken);
            this.localStorage.store('username', data.username);
            this.localStorage.store('refreshToken', data.refreshToken);
            this.localStorage.store('expiresAt', data.expiresAt);
            return true;  
     }));
  
      
      
}
}



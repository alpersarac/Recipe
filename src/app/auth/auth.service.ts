import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData{
  kind:string;
  idToken:string;
  email:string;
  refreshToken:string;
  expiresIn:string;
  localId:string;
}
@Injectable({providedIn:'root'})
export class AuthService{
  constructor(private http: HttpClient){}
  signup(email : string, password : string){

    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyAwfSrijOn7e_kO71yJzWjQtjsM9ryOc0U ',
    {
      email: email,
      password: password,
      returnSecureToken:true
    }
    );

  };
}

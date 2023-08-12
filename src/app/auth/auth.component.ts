import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Component({
  selector:'app-auth',
  templateUrl:'./auth.component.html'
})
export class AuthComponent{
  constructor(private authService:AuthService){}
  isLoginMode=true;
  isLoading=false;
  error:string = null;

  onSwitchMode(){
    this.isLoginMode=!this.isLoginMode;
  }
  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading=true;

    let authObs:Observable<AuthResponseData>;

    if(!this.isLoginMode){
      authObs=this.authService.signup(email,password);

    }else{
      authObs=this.authService.login(email,password);
    }
    authObs.subscribe( response =>{
      console.log(response);
      this.isLoading=false;
    }, errorMessage=>{
      console.log(errorMessage);
      this.error=errorMessage;
      this.isLoading=false;
    });
    form.reset();
  }
}

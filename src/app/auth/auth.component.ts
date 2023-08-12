import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
  selector:'app-auth',
  templateUrl:'./auth.component.html'
})
export class AuthComponent{
  constructor(private authService:AuthService){}
  isLoginMode=true;
  isLoading=false;
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
    if(!this.isLoginMode){
      this.authService.signup(email,password)
      .subscribe( response =>{
      console.log(response);
      this.isLoading=false;
    }, error=>{
      console.log(error);
      this.isLoading=false;
    });
    }

    form.reset();
  }
}

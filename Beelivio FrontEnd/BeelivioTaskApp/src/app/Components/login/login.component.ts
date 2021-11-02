import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginRequestModel } from 'src/app/Models/LoginRequestModel';
import { IdentityService } from 'src/app/Services/identity.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest:LoginRequestModel={
    userName:"",
    password:"",
    email:""
  }
  constructor(private identityService:IdentityService,
    private router:Router,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  
  @ViewChild("LoginForm", {static:false}) LoginForm :NgForm;
  onFormSubmit(){
    this.LoginForm.form.markAllAsTouched()
    if(this.LoginForm.form.invalid){
      this.toastr.error("Please fill valid data!!!","",{positionClass:'toast-bottom-right'})
    }
    this.identityService.logIn(this.loginRequest).subscribe(x=>{
      if(x.responseCode==200){
        localStorage.setItem("AuthToken",x.token);
        this.router.navigate(["/"]);
        this.toastr.success("You have succesfully Loged In!!!","",{positionClass:"toast-bottom-right"});
        
      }
      else{
        this.toastr.warning("Invalid UserName or Password","",{positionClass:'toast-bottom-right'})
      }
    })
  
    
    
  }
}

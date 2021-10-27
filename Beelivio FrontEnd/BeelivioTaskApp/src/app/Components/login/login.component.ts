import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
    password:""
  }
  constructor(private identityService:IdentityService,
    private router:Router) { }

  ngOnInit(): void {
  }
  
  @ViewChild("LoginForm", {static:false}) LoginForm :NgForm;
  onFormSubmit(){
    this.identityService.logIn(this.loginRequest).subscribe(x=>{
      localStorage.setItem("AuthToken",x.token);
      this.router.navigate(["/"]);
    })
    
  }
}

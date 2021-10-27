import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequestModel } from 'src/app/Models/LoginRequestModel';
import { IdentityService } from 'src/app/Services/identity.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private identityService:IdentityService,private router:Router) { }
  registerModel:LoginRequestModel={
    userName:"",
    password:""
  }
  ngOnInit(): void {
  }

  @ViewChild("MySelectForm")form :NgForm
  onFormSubmit(){
    this.form.form.markAllAsTouched()
    if(this.form.invalid){
      console.log("Please insert valid details")
    }
    this.identityService.createUser(this.registerModel).subscribe(x=>{
      localStorage.setItem("AuthToken",x.token);
      this.router.navigate(["/"]);})
  }
}

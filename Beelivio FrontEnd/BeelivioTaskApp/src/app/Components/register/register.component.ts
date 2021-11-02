import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginRequestModel } from 'src/app/Models/LoginRequestModel';
import { IdentityService } from 'src/app/Services/identity.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private identityService:IdentityService,private router:Router, private toastr:ToastrService) { }
  registerModel:LoginRequestModel={
    userName:"",
    password:"",
    email:""
  }
  ngOnInit(): void {
  }

  @ViewChild("MySelectForm",{static:false})registerform :NgForm
  onFormSubmit(){
    this.registerform.form.markAllAsTouched()
    if(this.registerform.form.invalid){
      this.toastr.error("Please fill valid data!!!","",{positionClass:'toast-bottom-right'})
    }
    console.log(111,this.registerModel)
    this.identityService.createUser(this.registerModel).subscribe(x=>{
      if(x.responseCode==200){
        localStorage.setItem("AuthToken",x.token);
      this.router.navigate(["/"]);
      this.toastr.success("You have succesfully Registered!!!","",{positionClass:"toast-bottom-right"});
      }
      else if(x.responseCode==409){
        this.toastr.warning("UserName already taken","",{positionClass:'toast-bottom-right'})
      }
    })
  }
}

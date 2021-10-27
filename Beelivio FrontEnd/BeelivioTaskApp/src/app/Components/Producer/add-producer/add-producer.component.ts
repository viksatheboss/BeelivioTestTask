import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProducerModel } from 'src/app/Models/ProducerModel';
import { ProducerService } from 'src/app/Services/producer.service';

@Component({
  selector: 'app-add-producer',
  templateUrl: './add-producer.component.html',
  styleUrls: ['./add-producer.component.css']
})
export class AddProducerComponent implements OnInit {
  producerModel:ProducerModel={
    id:0,
    name:""
  }
  id:number;
  constructor(private router:Router,
    private activeRoute:ActivatedRoute,
    private producerService:ProducerService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    if(this.router.url.includes("/editProducer/")){
      this.id = +this.activeRoute.snapshot.params.id
      this.producerService.getProducerById(this.id).subscribe(x=>{this.producerModel = x})
    }
  }
  saveProducer(){
    if(this.producerModel.id!=0 || undefined){
      this.producerService.updateProducer(this.producerModel).subscribe(x=>{
        if(x.statusCode==200){
          this.toastr.success("Succesfully update","",{positionClass:'toast-bottom-right'})
        }else{
          this.toastr.warning("Cannot update","",{positionClass:'toast-bottom-right'})
        }
      })
    }
    else{
      this.producerService.createProducer(this.producerModel).subscribe(x=>{
        if(x.statusCode==200){
          this.toastr.success("Succesfully created","",{positionClass:'toast-bottom-right'})
        }else{
          this.toastr.warning("Cannot create","",{positionClass:'toast-bottom-right'})
        }
      })
    }
  }
  @ViewChild("MySelectForm",{static:false})form:NgForm

onFormSubmit(){
  this.form.form.markAllAsTouched()
  if(this.form.invalid){
    console.log("Please fill valid details")
    this.toastr.warning("Please fill valid details","",{positionClass:"toast-bottom-right"})
  }
  this.saveProducer()
}
}

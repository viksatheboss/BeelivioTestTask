import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProducerModel } from 'src/app/Models/ProducerModel';
import { ProductModel } from 'src/app/Models/ProductModel';
import { ProducerService } from 'src/app/Services/producer.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productModel:ProductModel={
    productId:0,
    productName:"",
    productPrice: 0,
    producerId:0
  }
  id:number;
  producerList:ProducerModel[];
  constructor(private activeRoute:ActivatedRoute, private router:Router,
    private productService:ProductService,
    private producerService:ProducerService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    if(this.router.url.includes("/editProduct/")){
      this.id = +this.activeRoute.snapshot.params.id
      this.productService.getProductById(this.id).subscribe(x=>{
        this.productModel = x
        console.log(111,this.productModel)
      })
    }
    this.producerService.getAllProducers().subscribe(x=>{
      this.producerList=x
    })
  }

  saveProduct(){
    if(this.productModel.productId != 0 || undefined){
      this.productService.udpateProduct(this.productModel).subscribe(x=>{
        if(x.statusCode==200){
          this.toastr.success("Succesfully updated","",{positionClass:"toast-bottom-right"})
        }else{
          this.toastr.warning("Cannot update","",{positionClass:"toast-bottom-right"})
        }
      })
    }else{
      this.productService.createProduct(this.productModel).subscribe(x=>{
        if(x.statusCode==200){
          this.toastr.success("Succesfully created","",{positionClass:"toast-bottom-right"})
        }else{
          this.toastr.warning("Cannot create","",{positionClass:"toast-bottom-right"})
        }
      })
    }
  }
  @ViewChild("MySelectForm", {static:false})form :NgForm
  onFormSubmit(){
    this.form.form.markAllAsTouched();
    if(this.form.invalid){
      console.log("Please insert valid data")
      this.toastr.warning("Please insert valid details","",{positionClass:"toast-bottom-right"})
    }
    this.saveProduct()
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProducerModel } from 'src/app/Models/ProducerModel';
import { ProductModel } from 'src/app/Models/ProductModel';
import { SearchModel } from 'src/app/Models/SearchModel';
import { ProducerService } from 'src/app/Services/producer.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private productService:ProductService,
    private router:Router,
    private producerService:ProducerService,
    private toastr:ToastrService) { }

  searchModelItem: SearchModel = new SearchModel(0,15,"");
  productList:ProductModel[]
  producerList:ProducerModel[]
  producerName:string="";
  producerIds: number;
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(x=>{
      this.productList = x
      // for(let i in this.productList){
      //   this.producerIds.push(this.productList[i].producerId)
      // }
      this.producerService.getAllProducers().subscribe(x=>{
        this.producerList=x
        // for(let j of this.productList){
        //   this.producerName = this.producerList.find(c=> c.id == this.producerIds).name
        // }
        for(let i in this.productList){
          this.producerIds = this.productList[i].producerId;
          this.productList[i].producerName = this.producerList.find(x=>x.id==this.producerIds)?.name
        }
        
      })
    })
    
    
    
  }
  
  findProducer(){
    this.producerIds  
  }
  navigateEdit(product:ProductModel){
    this.router.navigate(["/editProduct/"+product.productId])
  }
  delete(id:number, i:number){
    this.productService.deleteProduct(id).subscribe(x=>{console.log(x)
      if(x.statusCode==200){
        this.toastr.error("Succesfully deleted","",{positionClass:'toast-bottom-right'})
        this.productList.splice(i,1)
      }else{
        this.toastr.warning("Cannot delete","",{positionClass:"toast-bottom-right"})
      }
    })
    
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { ToastrService } from 'ngx-toastr';
import { ProducerModel } from 'src/app/Models/ProducerModel';
import { ProductModel } from 'src/app/Models/ProductModel';
import { SearchModel } from 'src/app/Models/SearchModel';
import { ProducerService } from 'src/app/Services/producer.service';
import { ProductService } from 'src/app/Services/product.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private productService:ProductService,
    private router:Router,
    private producerService:ProducerService,
    private toastr:ToastrService,
    private dialogService:NbDialogService) { }

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
  deleteProduct(id:number, i:number){
    const modal = this.dialogService.open(ConfirmDialogComponent)
    .onClose.subscribe(result => result && this.delete(id,i,result))
  }
  delete(id:number, i:number, isDelete:boolean){
    if(isDelete==true){
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
}

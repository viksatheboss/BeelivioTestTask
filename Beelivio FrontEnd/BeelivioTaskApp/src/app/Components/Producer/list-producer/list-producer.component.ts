import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { ToastrService } from 'ngx-toastr';
import { ProducerModel } from 'src/app/Models/ProducerModel';
import { SearchModel } from 'src/app/Models/SearchModel';
import { ProducerService } from 'src/app/Services/producer.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-list-producer',
  templateUrl: './list-producer.component.html',
  styleUrls: ['./list-producer.component.css']
})
export class ListProducerComponent implements OnInit {
  producerList:ProducerModel[]
  searchModelItem: SearchModel = new SearchModel(0,15,"");
  constructor(private producerService:ProducerService,
    private router:Router,
    private toastr:ToastrService,
    private dialogService:NbDialogService) { }

  ngOnInit(): void {
    this.producerService.getAllProducers().subscribe(x=>{
      this.producerList = x
    })
  }
  navigateEdit(producer:ProducerModel){
    this.router.navigate(['/editProducer/'+ producer.id])
  }
  deleteProducer(id:number, i:number){
    const modal= this.dialogService.open(ConfirmDialogComponent)
    .onClose.subscribe(result => result && this.delete(id,i,result))
  }
  delete(id:number,i:number, isDelete:boolean){
    if(isDelete==true){
      this.producerService.deleteProducer(id).subscribe(x=>{
        if(x.statusCode == 200){
          this.toastr.error("Succesfully deleted","",{positionClass:'toast-bottom-right'})
          this.producerList.splice(i,1)
        }
        else{
          this.toastr.warning("Cannot delete","",{positionClass:'toast-bottom-right'})
        }
      })
      
    }
    
  }
}

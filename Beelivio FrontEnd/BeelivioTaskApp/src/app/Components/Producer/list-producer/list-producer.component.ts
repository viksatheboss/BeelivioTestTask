import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProducerModel } from 'src/app/Models/ProducerModel';
import { SearchModel } from 'src/app/Models/SearchModel';
import { ProducerService } from 'src/app/Services/producer.service';

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
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.producerService.getAllProducers().subscribe(x=>{
      this.producerList = x
    })
  }
  navigateEdit(producer:ProducerModel){
    this.router.navigate(['/editProducer/'+ producer.id])
  }
  delete(id:number,i:number){
    this.producerService.deleteProducer(id).subscribe(x=>{
      if(x.statusCode == 200){
        this.toastr.error("Succesfully deleted","",{positionClass:'toast-bottom-right'})
      }
      else{
        this.toastr.warning("Cannot delete","",{positionClass:'toast-bottom-right'})
      }
    })
    this.producerList.splice(i,1)
  }
}

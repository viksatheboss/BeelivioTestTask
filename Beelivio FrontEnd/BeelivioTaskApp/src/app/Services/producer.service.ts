import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../Models/ApiResponseModel';
import { CommonResponseModel } from '../Models/CommonResponseModel';
import { ProducerModel } from '../Models/ProducerModel';
import { ApiUrlService } from './api-url.service';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {

  constructor(private http:HttpClient, private apiUrl:ApiUrlService) { }
  private url = this.apiUrl.Api+"/Producer";
  getAllProducers():Observable<ProducerModel[]>{
    return this.http.get<ProducerModel[]>(this.url+"/GetAll")
  }
  getProducerById(id:number):Observable<ProducerModel>{
    return this.http.get<ProducerModel>(this.url+"/GetById/"+id)
  }
  createProducer(producer:ProducerModel):Observable<CommonResponseModel>{
    return this.http.post<CommonResponseModel>(this.url+"/InsertProducer", producer)
  }
  updateProducer(producer:ProducerModel):Observable<CommonResponseModel>{
    return this.http.post<CommonResponseModel>(this.url+"/UpdateProducer", producer)
  }
  deleteProducer(id:number):Observable<CommonResponseModel>{
    return this.http.delete<CommonResponseModel>(this.url+"/Delete/"+id)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonResponseModel } from '../Models/CommonResponseModel';
import { ProductModel } from '../Models/ProductModel';
import { ApiUrlService } from './api-url.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient, private apiUrl:ApiUrlService) { }
  private url = this.apiUrl.Api+"/Product";
  getAllProducts():Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>(this.url+"/GetAll")
  }
  createProduct(product:ProductModel):Observable<CommonResponseModel>{
    return this.http.post<CommonResponseModel>(this.url+"/InsertProduct",product)
  }
  udpateProduct(product:ProductModel):Observable<CommonResponseModel>{
    return this.http.post<CommonResponseModel>(this.url+"/UpdateProduct",product)
  }
  getProductById(id:number):Observable<ProductModel>{
    return this.http.get<ProductModel>(this.url+"/GetById/"+id)
  }
  deleteProduct(id:number):Observable<CommonResponseModel>{
    return this.http.delete<CommonResponseModel>(this.url+"/Delete/"+id)
  }
}

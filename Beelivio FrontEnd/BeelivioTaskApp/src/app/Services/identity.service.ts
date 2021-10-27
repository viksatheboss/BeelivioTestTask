import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddAccountModel } from 'src/app/Models/AddAccountModel';
import { ApiResponseModel } from 'src/app/Models/ApiResponseModel';
import { DropDownModel } from 'src/app/Models/DropDownModel';
import { IdRequestModel } from 'src/app/Models/IdRequestModel';

import { LoginRequestModel } from 'src/app/Models/LoginRequestModel';
import { LoginResponseModel } from 'src/app/Models/LoginResponseModel';
import { SearchModel } from 'src/app/Models/SearchModel';

import { ApiUrlService } from './api-url.service';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  constructor(private http: HttpClient, private apiUrls: ApiUrlService, private router:Router) { }

  private AuthUrl = this.apiUrls.Api + "/User";

  logIn(logInItem: LoginRequestModel): Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(this.AuthUrl + "/LogIn", logInItem);
  }

  logOut(){
    localStorage.removeItem("AuthToken");
    this.router.navigate(['/Auth/login'])
    //this.AuthUrl = null;
  }
  // logOut
  // da se brise od storage auth tokenot
  getUsers(searchModel:SearchModel):Observable<{data:AddAccountModel[], total:number}>{
    return this.http.post<{data:AddAccountModel[], total:number}>(this.AuthUrl+"/GetUsers", searchModel)
  }
  createUser(account:LoginRequestModel):Observable<LoginResponseModel>{
    return this.http.post<LoginResponseModel>(this.AuthUrl+'/RegisterUser', account)
  }
//   updateUser(account:AddAccountModel):Observable<AddAccountModel>{
//     return this.http.post<AddAccountModel>(this.AuthUrl+'/EditUser', account)
//   }
//   getUserById(idRequest:IdRequestModel):Observable<AddAccountModel>{
//     return this.http.post<AddAccountModel>(this.AuthUrl+"/GetUserById", idRequest)
//   }
//   deleteUser(idRequest: IdRequestModel):Observable<ApiResponseModel>{
//     return this.http.post<ApiResponseModel>(this.AuthUrl+"/DeleteUser", idRequest)
//   }
//   dropdownRoles():Observable<{data:DropDownModel[]}>{
//     return this.http.get<{data:DropDownModel[]}>(this.AuthUrl+'/DropDownRoles');
//   }
//   changePassword(changePassword:AddAccountModel):Observable<ResultModel<AddAccountModel>>{
//     return this.http.post<ResultModel<AddAccountModel>>(this.AuthUrl+"/ChangePassword", changePassword)
//   }
}


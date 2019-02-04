import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient:HttpClient) { 
  }
  register(params:any){
    return this.httpClient.post('http://localhost:3000/user/register',params);
  }
  login(params:any){
    return this.httpClient.post('http://localhost:3000/user/login',params);
  }
}

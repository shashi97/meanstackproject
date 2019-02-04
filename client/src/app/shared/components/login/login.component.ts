import { Component, OnInit } from '@angular/core';
import {UsersService} from "./../../../shared/services/users.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   public user:any={};
  constructor(private usersService:UsersService) { }

  ngOnInit() {
  }
login(userParam:any){
  let user={
    email:userParam.email,
    password:userParam.password
  }
  this.usersService.login(user).subscribe((res)=>{
    console.log(res);
    this.user.email="";
    this.user.password="";
    alert(res['message']);
  })
}

}

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
  if(userParam.email==undefined || userParam.password===undefined || userParam.email==='' || userParam.password===''){
    alert("Enter email or password");
    return false;
  }else if(!userParam.email.match(/[a-zA-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-z0-9!#$%&'*+/=?^_`{|}~-]+)*@gmail\.com?/)){
      alert('Please enter valid email');
      return false;
  }
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

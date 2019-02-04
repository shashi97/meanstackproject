import { Component, OnInit } from '@angular/core';
import {UsersService} from "./../../../shared/services/users.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user:any={};

constructor(private usersService:UsersService,private router:Router) { }
  ngOnInit() {
  }
  register(userParam:any){
    let user={
      firstname:userParam.firstname,
      lastname:userParam.lastname,
      email:userParam.email,
      password:userParam.password,
      confirmpassword:userParam.confirmpassword,
      mobile:userParam.mobile
    }
    console.log(user);
    this.usersService.register(user).subscribe((res)=>{
      console.log(res);
      this.user={};
      alert(res['message']);
      this.router.navigate(['/']);
    })
  }
  
}

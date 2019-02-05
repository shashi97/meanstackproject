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

    if(userParam.firstname==undefined || userParam.firstname===''){
      alert("Enter firstname");
      return false;
    }else if(userParam.lastname==undefined || userParam.lastname===''){
      alert("Enter lastname");
      return false;
    }else if(userParam.email==undefined || userParam.email===''){
      alert("Enter email");
      return false;
    }else if(!userParam.email.match(/[a-zA-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-z0-9!#$%&'*+/=?^_`{|}~-]+)*@gmail\.com?/)){
        alert('Please enter valid email');
        return false;
    }else if(userParam.password==undefined || userParam.password===''){
      alert("Enter password");
      return false;
    }else if(userParam.confirmpassword==undefined || userParam.confirmpassword===''){
      alert("Enter confirmpassword");
      return false;
    }else if(userParam.mobile==undefined || userParam.mobile===''){
      alert("Enter mobile number");
      return false;
    }else if(userParam.password !==userParam.confirmpassword){
      alert("Confirm password should be same");
      return false;
    }

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

import { Component, OnInit } from '@angular/core';
import { cls_LoginModel } from 'Model/cls_LoginModel';
import { MyLoginService } from '../my-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserLogin:cls_LoginModel={
  AdminId:"",
  AdminPassword:""
  };
  constructor(private m1:MyLoginService) { }

  ngOnInit(): void {
  }
  loginStatus:number=0;
  validate(login:cls_LoginModel):number{

   this.loginStatus=this.m1.postlogin(login);
    console.log(login.AdminId+ this.loginStatus);
    return this.loginStatus;
  }

}

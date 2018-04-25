import { Component, OnInit } from '@angular/core';
import {Router, CanActivate} from '@angular/router';

const user = {username: "admin", password: "admin"};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  error = "";
  username = "";
  password = "";

  constructor(public router: Router) { }

  ngOnInit() {
    localStorage.clear();
  }

  login(){
    var self = this;
    self.error = "Validating......";

    if (self.username === "" && self.password === ""){
      self.error = "Username and password are null. Please input again."
      return;
    }

    if (self.username === "" || self.password === ""){
      self.error = "Username or password is null. Please input again."
      return;
    }

    if (self.username === user.username && self.password === user.password){
      localStorage.setItem('username', self.username);
      localStorage.setItem('password', self.password);
      self.router.navigate(['dashboard']);
    }
    else{
      self.error = "Username or password is incorrect. Please check again."
      self.username = "";
      self.password = "";
    }
  }
}

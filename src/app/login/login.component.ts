import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//The class is written in TypeScript, a superset of JavaScript that adds strong typing and other features to the language.


//handle all the logic for the component such as data binding, event handling, etc.

//Dependency Injection: if this compoenent needs any other service (Router, for example), we can inject it in the constructor of the class. It is a built-in feature of Angular, no need to import anything.


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username = "alice";
  password = ""; 
  errorMessage = "Invalid credentials";
  invalidLogin = false;

  //passed in arguments will be available as a member variable 
  constructor(private router: Router) { } 

  ngOnInit() {
    
  }

  handleLogin() {
    console.log(this.username);
    if(this.username==="alice" && this.password==="dummy") {
      //redirect to login page, pass in the route name 
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}

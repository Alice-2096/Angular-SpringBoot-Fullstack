import { Component, OnInit } from '@angular/core';  //import class 
import { ActivatedRoute } from '@angular/router';

//declarator in js 
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  username = ""; 

  // activatedRoute allows it to access the route parameters
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.username = this.route.snapshot.params['name'];
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  firstname ="";
  lastname="";
  constructor() { }

  ngOnInit(): void {
    this.getCredentials();
  }
  getCredentials(){
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.firstname = currentUser["user"]["firstname"];
    this.lastname=currentUser["user"]["lastname"];
  }
}

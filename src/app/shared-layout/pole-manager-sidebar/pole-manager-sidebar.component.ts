import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pole-manager-sidebar',
  templateUrl: './pole-manager-sidebar.component.html',
  styleUrls: ['./pole-manager-sidebar.component.scss'],
  styles: [`.router-link-active { background-color: #6f94b3; }`]

})
export class PoleManagerSidebarComponent implements OnInit {

  firstname = "";
  lastname = "";
  
  constructor(){}

  ngOnInit() {
    this.getCredentials();
  }
  
  getCredentials(){
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.firstname = currentUser["user"]["firstname"];
    this.lastname=currentUser["user"]["lastname"];
  } 

}

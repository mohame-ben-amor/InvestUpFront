import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-entrepreneur',
  templateUrl: './sidebar-entrepreneur.component.html',
  styleUrls: ['./sidebar-entrepreneur.component.scss'],
  styles: [`.router-link-active { background-color: #6f94b3; }`]
})
export class SidebarEntrepreneurComponent implements OnInit {

  constructor() { }
  firstname = "";
  lastname = "";
  ngOnInit() {
    this.getCredentials();
  }
  getCredentials(){
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.firstname = currentUser["user"]["firstname"];
    this.lastname=currentUser["user"]["lastname"];
  }

}

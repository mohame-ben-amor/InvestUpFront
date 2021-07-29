import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  styles: [`.router-link-active { background-color: #6f94b3; }`]
})
export class SidebarComponent implements OnInit {
  
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

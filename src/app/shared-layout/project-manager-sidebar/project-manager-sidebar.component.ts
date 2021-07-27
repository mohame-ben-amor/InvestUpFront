import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-manager-sidebar',
  templateUrl: './project-manager-sidebar.component.html',
  styleUrls: ['./project-manager-sidebar.component.scss'],  
  styles: [`.router-link-active { background-color: #19B3D3; }`]

})
export class ProjectManagerSidebarComponent implements OnInit {
    
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

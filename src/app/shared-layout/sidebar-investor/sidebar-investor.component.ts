import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-investor',
  templateUrl: './sidebar-investor.component.html',
  styleUrls: ['./sidebar-investor.component.scss'],
  styles: [`.router-link-active { background-color: #6f94b3; }`]
})
export class SidebarInvestorComponent implements OnInit {

  constructor() { }

  name = "";
  ngOnInit() {
    this.getCredentials();
  }
  getCredentials(){
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.name = currentUser["user"]["name"];
  }


}

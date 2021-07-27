import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  title = 'admin-panel-layout';
  sideBarOpen = true;
  role = "";

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() { }

  ngOnInit(): void {
    this.checkRole();
  }

  checkRole() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.role = currentUser["user"]["role"]["roleName"];
  }

}

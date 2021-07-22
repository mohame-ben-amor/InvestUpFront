import { Component, OnInit } from '@angular/core';
import { USERSLIST } from './users-items';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  public usersItems: any[];

  roles = ['Admin', 'Project Manager', 'Pole Manager', 'Developer'];
  withHoldingStatusList = ["None", "In vacation", "Sick days", "Suspension"];


  ngOnInit(): void {
    this.usersItems = USERSLIST;

  }



  

 



}
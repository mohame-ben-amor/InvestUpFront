import { Component, OnInit } from '@angular/core';
import { USERSLIST } from './users-items';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  public usersItems: any[];
  constructor() { }

  ngOnInit(): void {
    this.usersItems = USERSLIST;
  }

}

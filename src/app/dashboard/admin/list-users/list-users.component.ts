import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/user.service';
import { User } from 'src/app/core/models/user';
import { WithHoldingStatus } from 'src/app/core/models/withHoldingStatus';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {
  }

  public usersItems: any[];

  roles = ['Admin', 'Project Manager', 'Pole Manager', 'Developer'];
  withHoldingStatusList = ["None", "In vacation", "Sick days", "Suspension"];


  ngOnInit(): void {
    this.getAll()

  }

  getAll() {
    this.userService.getAll().subscribe(
      users => {
        this.users = users;
        console.log(this.users);
      });
  }

  toString(value: string): string {
    switch (value) {
      case "IN_VACATION":
        return WithHoldingStatus.IN_VACATION;
      case "SICK_DAYS":
        return WithHoldingStatus.SICK_DAYS;

      case "SUSPENSION":
        return WithHoldingStatus.SUSPENSION;
      case "NONE":
        return WithHoldingStatus.NONE;
    }
  }

}
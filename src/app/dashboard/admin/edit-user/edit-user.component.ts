import { Component, OnInit } from '@angular/core';
import { USERSLIST } from '../list-users/users-items';
import { RouteInfo } from '../list-users/users.metadata';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  public usersItems: RouteInfo[];

  constructor() {}

  ngOnInit(): void {
    this.usersItems = USERSLIST;
  }

  onEdit(id:number,role:String){
    // recuperer l'id de l'element selectionner et le role ! puis la redirection vers une autre 
    // page pour faire la modification sur le champ convient ( pour le moment seulemnt
    // la modification de role et la modification de withHoldingStatus sont supported by 
    // le backend pour le role de l'admin ! 
    //role khater les API msh kifkif kol withHolding update wahdo selon e role!
    console.log("tak tak id: "+id+" taktak role: "+role);
  }

}

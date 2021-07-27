
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
const document: any = window.document;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  editForm: FormGroup;
  closeResult: string;
  firstname="";
  lastname="";

  constructor() { }

  ngOnInit(): void {
    this.getCredentials();
    this.initForm();
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  private initForm() {
    this.editForm = new FormGroup({
      'password': new FormControl("", Validators.required),
      'npassword': new FormControl("", Validators.required),
    });
  }

  getCredentials(){
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.firstname = currentUser["user"]["firstname"];
    this.lastname=currentUser["user"]["lastname"];
  }
}
